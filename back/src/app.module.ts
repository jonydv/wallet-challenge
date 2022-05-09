import { Module } from '@nestjs/common';
import { WalletsModule } from './wallets/wallets.module';
import { DatabaseModule } from './database/database.module';
import { ExchangeModule } from './exchange/exchange.module';

@Module({
  imports: [
    WalletsModule, 
    DatabaseModule, ExchangeModule
  ],
})
export class AppModule {}
