import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, UsePipes, ValidationPipe, NotFoundException } from '@nestjs/common';
import { WalletsService } from './wallets.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { WalletAddressValidationPipe } from '../pipes/wallet-address-validation.pipe';

@Controller('wallets')
export class WalletsController {
    constructor(private walletsService: WalletsService) {}
    @Get()
    async getWallets() {
        try{
            return await this.walletsService.getAllWallets();
        }catch(error){
            throw new HttpException(error.message, HttpStatus.CONFLICT);
        }
        
    };

    @Get('/sorted')
    async getWalletsSorted() {
        try{
            return await this.walletsService.getAllWalletsSorted();
        }catch(error){
            throw new HttpException(error.message, HttpStatus.CONFLICT);
        }
        
    };

    @Get('/:id')
    async getWalletById(@Param('id') id: string){
        try{
            const wallet = await this.walletsService.getWalletById(id);
            if(!wallet){
                throw new NotFoundException(`The wallet with id: ${id} not found`);
            }
            return wallet;
        }catch(error){
            throw new HttpException(error.message, HttpStatus.CONFLICT);
        }
        
    }

    @Post()
    @UsePipes(ValidationPipe, WalletAddressValidationPipe)
    createWallet(@Body() createWalletDto: CreateWalletDto){
        return this.walletsService.createWallet(createWalletDto);
    }
    
    @Delete('/:id')
    async deleteWalletById(@Param('id') id: string) {
        try{
            const deletedWallet = await this.walletsService.deleteWalletById(id);
            if(!deletedWallet){
                throw new NotFoundException(`The wallet with id: ${id} not found`);
            }
            return deletedWallet;
        }catch(error){
            throw new HttpException(error.message, HttpStatus.CONFLICT);
        }

    }

    @Put(':id')
    async updateIsFavoriteWallet(@Param('id') id: string) {
        try{
            const updatedWallet = await this.walletsService.updateIsFavoriteWallet(id);
            if(!updatedWallet){
                throw new NotFoundException(`The wallet with id: ${id} not found`);
            }
            return updatedWallet;
        }catch(error){
            throw new HttpException(error.message, HttpStatus.CONFLICT);
        }
    }
}
