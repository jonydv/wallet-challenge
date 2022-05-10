import axios from 'axios';
import { Dispatch } from 'redux';
import { WalletActionType } from '../../action-types';
import { Action } from '../../actions';
import { WalletI } from '../../../models/wallet.interface';
import { successAlert, errorAlert } from '../../../helpers/generic-message-alert';

const baseURL: string = process.env.REACT_APP_BACK_URL!;

export const getWallets = (sortedByFavorite: boolean) => {
    return async(dispatch: Dispatch<Action>) => {
        try{
            dispatch({
                type: WalletActionType.WALLET_GET_ALL_REQUEST
            });

            const { data } = await axios.get(`${baseURL}/wallets?sortedByFavorite=${sortedByFavorite}`);

            dispatch({
                type: WalletActionType.WALLET_GET_ALL_SUCCESS,
                payload: data
            });
        }catch(error: any){
            dispatch({
                type: WalletActionType.WALLET_GET_ALL_FAIL,
                payload: error?.response && error?.response?.data?.message
                ? error?.response?.data?.message
                : error?.message
            });
            errorAlert(error.message);
        }
    }
}

export const createWallet = (address: string, name: string) =>{
    return async(dispatch: Dispatch<Action>) => {
        try{
            dispatch({
                type: WalletActionType.WALLET_CREATE_REQUEST
            });

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const { data } = await axios.post<WalletI>(
                `${baseURL}/wallets`,
                {address, name},
                config
                );
            dispatch({
                type: WalletActionType.WALLET_CREATE_SUCCESS,
                payload: data
            });
            successAlert('Wallet created succefull');

        }catch(error: any){
            dispatch({
                type: WalletActionType.WALLET_GET_ALL_FAIL,
                payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            });
            errorAlert(error.message.includes('duplicate') ? 'The wallet already exist' : error.message);
        }
    }
}

export const updateIsFavoriteWallet = (id: string) =>{
    return async(dispatch: Dispatch<Action>) => {
        try{
            dispatch({
                type: WalletActionType.WALLET_UPDATE_ISFAVORITE_REQUEST
            });

            const { data } = await axios.put<WalletI>(`${baseURL}/wallets/${id}`);
            dispatch({
                type: WalletActionType.WALLET_UPDATE_ISFAVORITE_SUCCESS,
                payload: data
            });
            successAlert('update wallet succefuly');
        }catch(error: any){
            dispatch({
                type: WalletActionType.WALLET_UPDATE_ISFAVORITE_FAIL,
                payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            });
            errorAlert(error.message);
        }
    }
}

export const removeWallet = (id: string) =>{
    return async(dispatch: Dispatch<Action>) => {
        try{
            dispatch({
                type: WalletActionType.WALLET_REMOVE_REQUEST
            });

            const { data } = await axios.delete<WalletI>(`${baseURL}/wallets/${id}`);
            dispatch({
                type: WalletActionType.WALLET_REMOVE_SUCCESS,
                payload: data
            });
            successAlert('Wallet deleted succefull');
        }catch(error: any){
            dispatch({
                type: WalletActionType.WALLET_REMOVE_FAIL,
                payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            });
            successAlert('Added to favorite');
        }
    }
}