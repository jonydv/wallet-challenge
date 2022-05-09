import { WalletI } from '../../../models/wallet.interface';
import { WalletActionType } from '../../action-types/wallet/wallet-action-types';
import { Action } from '../../actions';

interface WalletState {
    loading: boolean;
    error: string | null;
    walletInfo?: WalletI[] | null;
};

const initialState: WalletState = {
    loading: false,
    error: null,
    walletInfo: []
};

export const walletsReducer = (state: WalletState = initialState, action: Action): WalletState => {
    switch (action.type) {
        case WalletActionType.WALLET_GET_ALL_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case WalletActionType.WALLET_GET_ALL_SUCCESS:
            return {
                ...state,
                loading: false,
                walletInfo: action.payload,
            };
        case WalletActionType.WALLET_GET_ALL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case WalletActionType.WALLET_CREATE_REQUEST:
            return {
                ...state,
                loading: true,
            };
         case WalletActionType.WALLET_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                walletInfo: [...state?.walletInfo!, action?.payload],
            };
        
        case WalletActionType.WALLET_CREATE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

            
        case WalletActionType.WALLET_UPDATE_ISFAVORITE_REQUEST:
            return {
                ...state,
                loading: true,
                };
        case WalletActionType.WALLET_UPDATE_ISFAVORITE_SUCCESS:
            return {
                ...state,
                loading: false,
                walletInfo: state?.walletInfo?.map!(
                    wallet =>  (wallet._id === action.payload._id)  ? action.payload : wallet
                ),              
                };
        case WalletActionType.WALLET_UPDATE_ISFAVORITE_FAIL:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                };

        case WalletActionType.WALLET_REMOVE_REQUEST:
            return {
                ...state,
                loading: true,
                };
        case WalletActionType.WALLET_REMOVE_SUCCESS:
            return {
                ...state,
                loading: false,
                walletInfo: state?.walletInfo?.filter!(
                    wallet =>  wallet._id !== action.payload._id
                ),              
                };
        case WalletActionType.WALLET_REMOVE_FAIL:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                };

        default:
            return state;
    }
};

