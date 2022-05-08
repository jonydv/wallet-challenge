import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { WalletAddressValidationPipe } from '../pipes/wallet-address-validation.pipe';

@Controller('wallets')
export class WalletsController {
    constructor(private walletsService: WalletsService) {}
    @Get()
    getWallets() {
        return this.walletsService.getAllWallets();
    }

    @Get('/:id')
    getWalletById(@Param('id') id: string){
        return this.walletsService.getWalletById(id);
    }

    @Post()
    @UsePipes(ValidationPipe, WalletAddressValidationPipe)
    createWallet(@Body() createWalletDto: CreateWalletDto){
        return this.walletsService.createWallet(createWalletDto);
    }
    
    @Delete('/:id')
    deleteWalletById(@Param('id') id: string) {
        return this.walletsService.deleteWalletById(id);
    }

    @Put(':id')
    updateIsFavoriteWallet(@Param('id') id: string) {
        return this.walletsService.updateIsFavoriteWallet(id);
    }
}
