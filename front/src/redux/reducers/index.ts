import { combineReducers } from 'redux';
import { exchangeReducer } from './exchange/exchangeReducer';
import { walletsReducer} from './wallet/walletReducers';

 const reducers = combineReducers({
     wallets: walletsReducer,
     exchange: exchangeReducer
 })

 export default reducers;

export type RootState = ReturnType<typeof reducers>;