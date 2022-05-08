import { combineReducers } from 'redux';
import { 
    getWalletsReducer,
    createWalletReducer
 } from './wallet/walletReducers';

 const reducers = combineReducers({
     wallets: getWalletsReducer,
     createWallet: createWalletReducer
 })

 export default reducers;

export type RootState = ReturnType<typeof reducers>;