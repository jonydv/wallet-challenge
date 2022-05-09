import { WalletActionType } from "../../action-types";
import { WalletI } from '../../../models/wallet.interface';

export interface GetAllWalletsAction {
    type: WalletActionType.WALLET_GET_ALL_REQUEST;
}

export interface GetAllWalletsSuccessAction {
    type: WalletActionType.WALLET_GET_ALL_SUCCESS;
    payload: WalletI[];
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
    payload: WalletI[];
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
    payload: WalletI;
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
    payload: WalletI;
}

export interface CreateWalletFailAction {
    type: WalletActionType.WALLET_CREATE_FAIL;
    payload: any;
}

export interface RemoveWalletAction {
    type: WalletActionType.WALLET_REMOVE_REQUEST;
}

export interface RemoveWalletSuccessAction {
    type: WalletActionType.WALLET_REMOVE_SUCCESS;
    payload: WalletI;
}

export interface RemoveWalletFailAction {
    type: WalletActionType.WALLET_REMOVE_FAIL;
    payload: any;
}