import { Injectable } from '@nestjs/common';
import { Wallet } from './wallet.model';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { WalletsRepository } from './wallet.repository';
import { Observable } from 'rxjs';

@Injectable()
export class WalletsService {
    constructor(
        private readonly walletRepository: WalletsRepository,
    ) {}

    getAllWallets(): Promise<Observable<Wallet[]>> {
        return this.walletRepository.getAllWallets();
    }

    getAllWalletsSorted(): Promise<Observable<Wallet[]>> {
        return this.walletRepository.getWalletsSorted();
    }

    getWalletById(id: string): Promise<Wallet> {
        return this.walletRepository.getWalletById(id);
    }

    createWallet(createWalletDto: CreateWalletDto): Observable<Promise<Wallet>> {
        return this.walletRepository.createWallet(createWalletDto);
    }

    deleteWalletById(id: string): Promise<Wallet> {
        return this.walletRepository.deleteWalletById(id);      
    }

    updateIsFavoriteWallet(id: string): Promise<Wallet> {
        return this.walletRepository.updateIsFavoriteWallet(id); 
    }

}
