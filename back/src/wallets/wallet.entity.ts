import { Schema } from 'mongoose';

export const WalletSchema = new Schema({
  address: {
    type: String,
    required: [true, 'The wallet address is required'],
    unique: true,
  },
  balance: {type: String, default: '0'},
  isFavorite: { type: Boolean, default: false },
  isOld: { type: Boolean, default: false },
  name: { type: String, required: true },
});