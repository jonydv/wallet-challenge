import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { WalletsController } from './wallets.controller';
import { WalletsService } from './wallets.service';
import { UtilsModule } from '../utils/utils.module';
import { WalletSchema } from './wallet.entity';
import { WalletsRepository } from './wallet.repository';

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
  providers: [WalletsService, WalletsRepository]
})
export class WalletsModule {}
