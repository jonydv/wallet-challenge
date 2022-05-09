import React, { useState }from 'react'
import { WalletProps } from '../../models/wallet.interface';
import './Wallet.scss';
import { useActions } from '../../hooks/useActions';


const Wallet: React.FC<WalletProps> = ({wallet}) => {

  const [ showEdit, setShowEdit ] = useState(false);
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

  const rateHandler = () => {

  }
  return (
    <div className="wallet">
    <h3 className="wallet__title">{wallet.name}</h3>
    {
      !wallet.isOld && 
      <div className="alert alert-danger" role="alert">
        <i className="fa-solid fa-triangle-exclamation"></i>  Wallet is old!
      </div>
    }
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
            onClick={toggleShowEdit}
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
              <p className="wallet__card-content-info">1.35</p>
            :
              <input type="text" value={1.35} onChange={rateHandler}/>
          }
          

        </div>
      </div>
      <div className="wallet__card">
          <div className="wallet__card-selector">
            <select className="form-select" id="">
              <option value="">USD</option>
              <option value="">EUR</option>
            </select>
          </div>
          <div className="wallet__card-content">
            <p className="wallet__card-content-info">30$</p>
          </div>
      </div>
    </div>
  );

}

export default Wallet;