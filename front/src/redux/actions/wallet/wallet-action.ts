import { WalletActionType } from "../../action-types";

export interface GetAllWalletsAction {
    type: WalletActionType.WALLET_GET_ALL_REQUEST;
}

export interface GetAllWalletsSuccessAction {
    type: WalletActionType.WALLET_GET_ALL_SUCCESS;
    payload: any;
}

export interface GetAllWalletsFailAction {
    type: WalletActionType.WALLET_GET_ALL_FAIL;
    payload: any;
}

export interface GetAllWalletsOrderByFavoriteAction {
    type: WalletActionType.WALLET_GET_ALL_ORDER_BY_FAVORITE_REQUEST;
}

export interface GetAllWalletsOrderByFavoriteSuccessAction {
    type: WalletActionType.WALLET_GET_ALL_ORDER_BY_FAVORITE_SUCCESS;
    payload: any;
}

export interface GetAllWalletsOrderByFavoriteFailAction {
    type: WalletActionType.WALLET_GET_ALL_ORDER_BY_FAVORITE_FAIL;
    payload: any;
}

export interface UpdateIsFavoriteWalletAction {
    type: WalletActionType.WALLET_UPDATE_ISFAVORITE_REQUEST;
}

export interface UpdateIsFavoriteWalletSuccessAction {
    type: WalletActionType.WALLET_UPDATE_ISFAVORITE_SUCCESS;
    payload: any;
}

export interface UpdateIsFavoriteWalletFailAction {
    type: WalletActionType.WALLET_UPDATE_ISFAVORITE_FAIL;
    payload: any;
}

export interface CreateWalletAction {
    type: WalletActionType.WALLET_CREATE_REQUEST;
}

export interface CreateWalletSuccessAction {
    type: WalletActionType.WALLET_CREATE_SUCCESS;
    payload: any;
}

export interface CreateWalletFailAction {
    type: WalletActionType.WALLET_CREATE_FAIL;
    payload: any;
}