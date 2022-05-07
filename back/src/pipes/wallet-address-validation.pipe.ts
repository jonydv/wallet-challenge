import { BadRequestException, PipeTransform } from '@nestjs/common';
import * as Web3Utils from 'web3-utils';
import { CreateWalletDto } from '../wallets/dto/create-wallet.dto';

export class WalletAddressValidationPipe implements PipeTransform {
  transform(value: CreateWalletDto) {
    const { address } = value;
    // We need to check if the address have a correct sintax, if not we not save in the DB
    if (!Web3Utils.isAddress(address)) {
      throw new BadRequestException(`The address is invalid`);
    }
    return value;
  }
}
