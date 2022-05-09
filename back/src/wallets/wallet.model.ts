export interface Wallet {
  _id: string;
  address: string;
  balance?: string;
  isFavorite: boolean;
  isOld: boolean;
  name: string;
}