import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wallet } from './wallet.model';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { ApiDataService } from '../utils/api-data/api-data.service';
import { map } from 'rxjs';

@Injectable()
export class WalletsService {
    constructor(
        @InjectModel('Wallet') private readonly walletModel: Model<Wallet>,
        private apiDataService: ApiDataService
    ) {}

    async getAllWallets() {
        return await this.walletModel.find({
            state: true
        });
    }

    async getWalletById(id: string) {
        const wallet = await this.walletModel.findById(id);
        console.log(wallet)
        if(!wallet){
           throw new NotFoundException(`The wallet with the id: ${id} not found`);
        }
        return wallet;
    }

    async createWallet(createWalletDto: CreateWalletDto) {
    // Before we create a wallet, we make an Api call to make sure of the last transaction date
    // if is one year old or more, we asign the isOld attribute in true
        return this.apiDataService.createWalletWithHisOldValue(createWalletDto).pipe(
            map(async (walletFromService: CreateWalletDto) => {
                try{
                    const wallet = await new this.walletModel(walletFromService).save();
                    return wallet;
                }catch(error){
                    throw new HttpException(error.message, HttpStatus.CONFLICT);
                }
            })
        )
    }

    async deleteWalletById(id: string) {
    //We do´nt delete the wallet of the DB, we change the state to false, so in the future we can recover
        const wallet = await this.walletModel.findByIdAndUpdate(
            id,
            {
                state: false
            },
            //We return the new state of the wallet in the database
            {
                new: true
            }
        );
        if(!wallet){
            throw new NotFoundException(`The wallet with the id: ${id} not found`);
        }

        return wallet;
    }
}
