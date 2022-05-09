import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { combineLatest, map, Observable } from 'rxjs';
import { Wallet } from 'src/wallets/wallet.model';
import { CreateWalletDto } from '../../wallets/dto/create-wallet.dto';
import { DateService } from '../date/date.service';
import { EtherscanNormalTransaction } from './api-data.interface';
@Injectable()
export class ApiDataService {
    private _apiKey: string = process.env.API_KEY;
    private _apiUrl: string = process.env.API_URL;

    constructor(
        private http: HttpService,
        private dateService: DateService
        ) {}

    createWalletWithHisIsOldValue(wallet: CreateWalletDto): Observable<CreateWalletDto> {
        //We make the call to the url with the query endblock=1 to get only the last transaction and consult his timeStamp and balance
        const { address } = wallet;
        const urlIsOld = 
        `${this._apiUrl}?module=account&action=txlist&address=${address}&startblock=0&endblock=1&page=1&offset=10&sort=asc&apikey=${this._apiKey}`;
        const urlBalance =
        `${this._apiUrl}?module=account&action=balance&address=${address}&tag=latest&apikey=${this._apiKey}`;
        return combineLatest([this.http.get(urlIsOld), this.http.get(urlBalance)]).pipe(
            map(([responseIsOld, responseBalance]) => [responseIsOld.data,  responseBalance.data]),
            map(([dataIsOld, dataBalance]) => {
                return[ 
                    this.dateService.getYearOldFromTimestamp(Number(dataIsOld?.result?.[0]?.timeStamp || 0)),
                    dataBalance.result
                    ];
            }),
            map(([firstTransaction, balance]) => {
                firstTransaction > 0 ? wallet.isOld = true : wallet.isOld = false;
                !!balance ? wallet.balance = balance : wallet.balance = '0'
                return wallet
            })
        );
    };

    getWalletBalanceFromApi(wallets: Wallet[]): Observable<Wallet[]>{
        const addresses = wallets.map(wallet => wallet.address).toString();
        const url =
        `${this._apiUrl}?module=account&action=balancemulti&address=${addresses}&tag=latest&apikey=${this._apiKey}`;

        return this.http.get(url).pipe(
            map(response => response.data),
            map((data: EtherscanNormalTransaction) => {
               return wallets.map(
                    (wallet: Wallet, index: number) => 
                        (wallet.address === data.result[index].account) 
                        ? {
                            _id: wallet._id,
                            isOld: wallet.isOld,
                            name: wallet.name,
                            isFavorite: wallet.isFavorite,
                            address: wallet.address, 
                            balance: wallet.balance = data.result[index].balance
                        }
                        : {
                            _id: wallet._id,
                            isOld: wallet.isOld,
                            name: wallet.name,
                            isFavorite: wallet.isFavorite,
                            address: wallet.address,
                            balance: wallet.balance = '0'
                    }
                )
            }),
        );
        
    }
}
