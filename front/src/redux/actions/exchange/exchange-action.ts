import { ExchangeActionType } from "../../action-types";
import { Exchange } from '../../../models/exchange.interface';

export interface GetExchangeAction {
    type: ExchangeActionType.EXCHANGE_GET_ALL_REQUEST;
}

export interface GetExchangeSuccessAction {
    type: ExchangeActionType.EXCHANGE_GET_ALL_SUCCESS;
    payload: Exchange;
}

export interface GetExchangeFailAction {
    type: ExchangeActionType.EXCHANGE_GET_ALL_FAIL;
    payload: any;
}