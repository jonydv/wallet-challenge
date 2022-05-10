import React, { useState }from 'react'
import { WalletProps } from '../../models/wallet.interface';
import './Wallet.scss';
import { useActions } from '../../hooks/useActions';
import { weiToEther } from '../../helpers/format-number';
import WalletSelector from '../wallet-selector/WalletSelector';
import WalletIsOld from '../wallet-is-old/WalletIsOld';


const Wallet: React.FC<WalletProps> = ({wallet, exchange}) => {
  const inputTextError = 'Ingrese un número válido';
  const [ showEdit, setShowEdit ] = useState(false);
  const [etherBalance, setEtherBalance] = useState(weiToEther(wallet.balance!));
  const [etherBalanceInput, setEtherBalanceInput] = useState(weiToEther(wallet.balance!));
  const [inputError, setInputError] = useState(false);
  const { updateIsFavoriteWallet, removeWallet } = useActions();
  
  const updateFavorite = (walletId: string) => {
    updateIsFavoriteWallet(walletId);
  };

  const handleRemoveWallet = (walletId: string) => {
    removeWallet(walletId);
  }
  const toggleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEtherBalanceInput(e?.target?.value);
    setInputError(false);
  };


  const toggleEtherBalance = () => {
    if(Number(etherBalanceInput)< 0){
      setInputError(true);
      return;
    }
    setEtherBalance(etherBalanceInput);
    setShowEdit(!showEdit);
    setInputError(false);
  };

  return (
    <div className="wallet">
    <h3 className="wallet__title">Wallet Name: {wallet.name}</h3>
      <WalletIsOld isOld={wallet.isOld}/>
      <div className="wallet__card">
        <div className="wallet__card-action">
          {
            !showEdit &&
          <>
            <i 
              className="fa-solid fa-pen-to-square"
              onClick={toggleShowEdit}
            ></i>
            <i 
              className="fa-solid fa-heart" 
              style={{color: wallet.isFavorite ? 'rgb(10, 13, 53)' : '#FFFFFF'}}
              onClick={() => updateFavorite(wallet._id)}
            ></i>
            <i 
              className="fa-solid fa-trash"
              onClick={() => handleRemoveWallet(wallet._id)}
              ></i>
          </>
          }
          {
            showEdit && <>
            <i 
              className="fa-solid fa-check"
              onClick={toggleEtherBalance}
            ></i> 
            <i 
              className="fa-solid fa-xmark"
              onClick={toggleShowEdit}
            ></i>
            </>
          }
        </div>
        <div className="wallet__card-content">
          {
            !showEdit ? 
              <p className="wallet__card-content-info">{etherBalance}</p>
            :<>
                <input type="number" value={etherBalanceInput} onChange={handleRate}/>
                {inputError && <p className="text-danger">{inputTextError}</p>}
              </>
          } 
        </div>
      </div>
      <div className="wallet__card">
        <WalletSelector key={etherBalance} exchange={exchange} etherBalance={etherBalance}/>
      </div>
    </div>
  );

}

export default Wallet;