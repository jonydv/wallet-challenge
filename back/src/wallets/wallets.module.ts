import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WalletSchema } from './wallet.model';
import { WalletsController } from './wallets.controller';
import { WalletsService } from './wallets.service';
import { UtilsModule } from '../utils/utils.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Wallet',
        schema: WalletSchema,
      },
    ]),
    UtilsModule,
  ],
  controllers: [WalletsController],
  providers: [WalletsService]
})
export class WalletsModule {}
