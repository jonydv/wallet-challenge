import { Module } from '@nestjs/common';
import { WalletsModule } from './wallets/wallets.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    WalletsModule, 
    DatabaseModule
  ],
})
export class AppModule {}
