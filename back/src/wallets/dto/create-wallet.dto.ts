import { IsNotEmpty } from 'class-validator';

export class CreateWalletDto {
    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    name: string;

    isOld: boolean;

    balance: string;
  }
  