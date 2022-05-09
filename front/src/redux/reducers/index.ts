import { combineReducers } from 'redux';
import { 
    walletsReducer,
 } from './wallet/walletReducers';

 const reducers = combineReducers({
     wallets: walletsReducer
 })

 export default reducers;

export type RootState = ReturnType<typeof reducers>;