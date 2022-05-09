import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ExchangeService } from './exchange.service';

@Controller('exchange')
export class ExchangeController {
    constructor(private exchangeService: ExchangeService) {}

    @Get()
    async getWallets() {
        try{
            return await this.exchangeService.getExchanges();
        }catch(error){
            throw new HttpException(error.message, HttpStatus.CONFLICT);
        }
        
    };
    
}
