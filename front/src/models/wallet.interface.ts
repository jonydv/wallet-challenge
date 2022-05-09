export interface WalletI {
    _id: string;
    address: string;
    balance?: string;
    isFavorite: boolean;
    isOld: boolean;
    name: string;
}

export interface WalletProps {
    wallet: WalletI
}