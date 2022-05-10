import { ExchangeAction } from '../../actions';
import { Exchange } from '../../../models/exchange.interface';
import { ExchangeActionType } from '../../action-types';

interface ExchangeState {
    loadingExchange: boolean;
    errorExchange: string | null;
    exchangeInfo?: Exchange | null;
};

const initialState: ExchangeState = {
    loadingExchange: false,
    errorExchange: null,
    exchangeInfo: {USD: 0, EUR: 0}
};

export const exchangeReducer = (state: ExchangeState = initialState, action: ExchangeAction): ExchangeState => {
    switch (action.type) {
        case ExchangeActionType.EXCHANGE_GET_ALL_REQUEST:
            return {
                ...state,
                loadingExchange: true,
            };
            case ExchangeActionType.EXCHANGE_GET_ALL_SUCCESS:
            return {
                ...state,
                loadingExchange: false,
                exchangeInfo: action.payload,
            };
            case ExchangeActionType.EXCHANGE_GET_ALL_FAIL:
            return {
                ...state,
                loadingExchange: false,
                errorExchange: action.payload
            };

        default:
            return state;
    }
};
