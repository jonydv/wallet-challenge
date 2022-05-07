import { Module } from '@nestjs/common';
import { WalletsModule } from './wallets/wallets.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    WalletsModule, 
    DatabaseModule
  ],
})
export class AppModule {}
