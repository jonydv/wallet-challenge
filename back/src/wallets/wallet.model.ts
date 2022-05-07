import { Schema } from 'mongoose';

export const WalletSchema = new Schema({
  address: {
    type: String,
    required: [true, 'The wallet address is required'],
    unique: true,
  },
  isFavorite: { type: Boolean, default: false },
  isOld: { type: Boolean, default: false },
  name: { type: String, required: true },
  state: { type: Boolean, default: true },
});

export interface Wallet {
  _id: string;
  address: string;
  isFavorite: boolean;
  isOld: boolean;
  name: string;
  state: boolean;
}