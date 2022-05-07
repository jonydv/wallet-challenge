import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wallet } from './wallet.model';

@Injectable()
export class WalletsService {
    constructor(
        @InjectModel('Wallet') private readonly walletModel: Model<Wallet>
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

}
