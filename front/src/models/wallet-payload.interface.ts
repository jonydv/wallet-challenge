import { WalletI } from './wallet.interface';
export interface WalletPayload {
    walletInfo?: WalletI[],
    loading: boolean,
    error?: any | null;
}