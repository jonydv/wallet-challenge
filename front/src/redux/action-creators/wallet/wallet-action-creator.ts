import axios from 'axios';
import { Dispatch } from 'redux';
import { WalletActionType } from '../../action-types';
import { Action } from '../../actions';

const baseURL: string = 'http://localhost:4000';

export const getWallets = () => {
    return async(dispatch: Dispatch<Action>) => {
        try{
            dispatch({
                type: WalletActionType.WALLET_GET_ALL_REQUEST
            });

            const { data } = await axios.get(`${baseURL}/wallets`);

            dispatch({
                type: WalletActionType.WALLET_GET_ALL_SUCCESS,
                payload: data
            });
        }catch(error: any){
            dispatch({
                type: WalletActionType.WALLET_GET_ALL_FAIL,
                payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            })
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

            const { data } = await axios.post(
                `${baseURL}/wallets`,
                {address, name},
                config
                );
            dispatch({
                type: WalletActionType.WALLET_CREATE_SUCCESS,
                payload: data
            });
        }catch(error: any){
            dispatch({
                type: WalletActionType.WALLET_GET_ALL_FAIL,
                payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            })
        }
    }
}