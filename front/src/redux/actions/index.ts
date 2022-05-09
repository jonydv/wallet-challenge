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