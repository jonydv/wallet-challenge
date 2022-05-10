import { Exchange } from './exchange.interface';
export interface WalletI {
    _id: string;
    address: string;
    balance?: string;
    isFavorite: boolean;
    isOld: boolean;
    name: string;
}

export interface WalletProps {
    wallet: WalletI;
    exchange: Exchange;
}

export interface WalletSelectorProps {
    exchange: Exchange;
    etherBalance: string;
}

export interface WalletIsOldProps {
    isOld: boolean;
}