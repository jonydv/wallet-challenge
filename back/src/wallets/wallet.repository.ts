import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wallet } from './wallet.model';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { ApiDataService } from '../utils/api-data/api-data.service';
import { map, Observable } from 'rxjs';

@Injectable()
export class WalletsRepository {
    constructor(
        @InjectModel('Wallet') private readonly walletModel: Model<Wallet>,
        private apiDataService: ApiDataService
    ) {}

    async getAllWallets(): Promise<Observable<Wallet[]>>{
        const wallets = await this.walletModel.find();
        return this.apiDataService.getWalletBalanceFromApi(wallets);
    }

    async getWalletsSorted(): Promise<Observable<Wallet[]>> {
        const wallets = await this.walletModel.find().sort({isFavorite: -1});
        return this.apiDataService.getWalletBalanceFromApi(wallets);
    }

    async getWalletById(id: string): Promise<Wallet> {
        return await this.walletModel.findById(id);
    }

    createWallet(createWalletDto: CreateWalletDto): Observable<Promise<Wallet>> {
        return this.apiDataService.createWalletWithHisIsOldValue(createWalletDto).pipe(
            map(async (walletFromService: CreateWalletDto) => {
                try{
                    return await new this.walletModel(walletFromService).save();
                }catch(error){
                    throw new HttpException(error.message, HttpStatus.CONFLICT);
                }
            })
        );
    }

    async deleteWalletById(id: string): Promise<Wallet> {
        // Now in the repository we change the method and remove the wallet of the DB
        return await this.walletModel.findByIdAndDelete(
            id,
            {
                new: true
            },
        );
    }

    async updateIsFavoriteWallet(id: string): Promise<Wallet> {
        return await this.walletModel.findByIdAndUpdate(
            id,
            [{$set:{isFavorite:{$eq:[false,"$isFavorite"]}}}],
            {new: true}
        );
    }

}
