import axios from 'axios';
import { Dispatch } from 'redux';
import { ExchangeActionType } from '../../action-types';
import { ExchangeAction } from '../../actions';

const baseURL: string = process.env.REACT_APP_BACK_URL!;

export const getExchange = () => {
    return async(dispatch: Dispatch<ExchangeAction>) => {
        try{
            dispatch({
                type: ExchangeActionType.EXCHANGE_GET_ALL_REQUEST
            });

            const { data } = await axios.get(`${baseURL}/exchange`);

            dispatch({
                type: ExchangeActionType.EXCHANGE_GET_ALL_SUCCESS,
                payload: data
            });
        }catch(error: any){
            dispatch({
                type: ExchangeActionType.EXCHANGE_GET_ALL_FAIL,
                payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            })
        }
    }
}