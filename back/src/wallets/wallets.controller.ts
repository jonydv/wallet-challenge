import { Controller, Get, Param } from '@nestjs/common';
import { WalletsService } from './wallets.service';

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
}
