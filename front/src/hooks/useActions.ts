import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWallets, createWallet } from '../redux/action-creators';


export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators({ getWallets, createWallet }, dispatch);
    
};