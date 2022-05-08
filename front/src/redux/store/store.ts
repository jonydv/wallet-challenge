import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

export interface AppState {
    wallets?: any;
    createWallet?: any;
}

const initialState = {
    wallets: {walletInfo: [], loading: false, error: null}
};

export const store = createStore(
    reducers, initialState, applyMiddleware(thunk)
);