import { RemoveWalletFailAction } from './wallet/wallet-action';
import {
    GetAllWalletsAction,
    GetAllWalletsFailAction,
    GetAllWalletsSuccessAction,
    GetAllWalletsOrderByFavoriteAction,
    GetAllWalletsOrderByFavoriteSuccessAction,
    GetAllWalletsOrderByFavoriteFailAction,
    UpdateIsFavoriteWalletAction,
    UpdateIsFavoriteWalletSuccessAction,
    UpdateIsFavoriteWalletFailAction,
    CreateWalletAction,
    CreateWalletSuccessAction,
    CreateWalletFailAction,
    RemoveWalletAction,
    RemoveWalletSuccessAction,
} from './wallet/wallet-action'
import { 
    GetExchangeAction,
    GetExchangeSuccessAction,
    GetExchangeFailAction
} from './exchange/exchange-action';

export type Action = 
    GetAllWalletsAction |
    GetAllWalletsFailAction |
    GetAllWalletsSuccessAction |
    GetAllWalletsOrderByFavoriteAction |
    GetAllWalletsOrderByFavoriteSuccessAction |
    GetAllWalletsOrderByFavoriteFailAction |
    UpdateIsFavoriteWalletAction |
    UpdateIsFavoriteWalletSuccessAction |
    UpdateIsFavoriteWalletFailAction |
    CreateWalletAction |
    CreateWalletSuccessAction |
    CreateWalletFailAction |
    RemoveWalletAction |
    RemoveWalletSuccessAction |
    RemoveWalletFailAction
;

export type ExchangeAction = 
    GetExchangeAction | 
    GetExchangeSuccessAction |
    GetExchangeFailAction
;