import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWallets, createWallet, updateIsFavoriteWallet } from '../redux/action-creators';
import { removeWallet } from '../redux/action-creators/wallet/wallet-action-creator';
import { getExchange } from '../redux/action-creators/exchange/exchange-action-creator';


export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators({ getWallets, createWallet, updateIsFavoriteWallet, removeWallet, getExchange }, dispatch);
    
};