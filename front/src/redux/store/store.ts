import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { WalletPayload } from '../../models/wallet-payload.interface';
import reducers from '../reducers';

export interface AppState {
    wallets?: WalletPayload;
}

const initialState = {
    wallets: {walletInfo: null, loading: false, error: null},
    exchange: {exchangeInfo: null, loadingExchange: false, errorExchange: null}
};

export const store = createStore(
    reducers, initialState, applyMiddleware(thunk)
);