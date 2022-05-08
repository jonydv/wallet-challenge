import { WalletActionType } from '../../action-types/wallet/wallet-action-types';
import { Action } from '../../actions';

interface WalletState {
    loading: boolean;
    error: string | null;
    walletInfo?: any;
};

const initialState: WalletState = {
    loading: false,
    error: null,
    walletInfo: []
};

export const getWalletsReducer = (state: WalletState = initialState, action: Action): WalletState => {
    switch (action.type) {
        case WalletActionType.WALLET_GET_ALL_REQUEST:
            return {
                loading: true,
                walletInfo: null,
                error: null
            };
        case WalletActionType.WALLET_GET_ALL_SUCCESS:
            return {
                loading: false,
                walletInfo: action.payload,
                error: null
            };
        case WalletActionType.WALLET_GET_ALL_FAIL:
            return {
                loading: false,
                walletInfo: null,
                error: action.payload
            };
        default:
            return state;
    }
};

export const createWalletReducer = (state: WalletState = initialState, action: Action): WalletState => {
    switch (action.type) {
        case WalletActionType.WALLET_CREATE_REQUEST:
            return {
                loading: true,
                walletInfo: null,
                error: null
            };
        case WalletActionType.WALLET_CREATE_SUCCESS:
            return {
                loading: false,
                walletInfo: action.payload,
                error: null
            };
        case WalletActionType.WALLET_CREATE_FAIL:
            return {
                loading: false,
                walletInfo: null,
                error: action.payload
            };
        default:
            return state;
    }
};