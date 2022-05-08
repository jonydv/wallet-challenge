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
    CreateWalletFailAction
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
    CreateWalletFailAction
;