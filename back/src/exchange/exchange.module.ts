import { Module } from '@nestjs/common';
import { ExchangeController } from './exchange.controller';
import { ExchangeService } from './exchange.service';
import { UtilsModule } from '../utils/utils.module';

@Module({
  imports:[
    UtilsModule
  ],
  controllers: [ExchangeController],
  providers: [ExchangeService],
  exports:[ExchangeService]
})
export class ExchangeModule {}
