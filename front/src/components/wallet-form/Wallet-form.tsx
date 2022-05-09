import React, { SyntheticEvent, useState } from 'react'
import Web3Utils from 'web3-utils';
import './Wallet-form.scss';
import { useActions } from '../../hooks/useActions';

const WalletForm: React.FC = () => {
  const invalidName = 'The name shold be have from 3 to 20 characters';
  const invalidAddress = 'The address is invalid';
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const { createWallet } = useActions();
  
  const submitWallet = (e: SyntheticEvent) => {
    e.preventDefault();
    if(name.length < 3 || name.length > 20){
      setNameError(true);
      return;
    }
    if(!Web3Utils.isAddress(address)){
      setAddressError(true);
      return;
    }
    createWallet(address, name);

}

const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
  setName(e.target.value);
  setNameError(false);
};
const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
  setAddress(e.target.value);
  setAddressError(false);
};
  return (
    <>
      <form onSubmit={submitWallet} className="form-container">
      <h3 className="mb-5">Add a new wallet</h3>
            <div className="mb-3">
                <label className="form-label">Name: </label>
                <input type="text" className="form-control" placeholder="Name..." 
                    onChange={handleName}
                />
                {
                  nameError && <p className="text-danger">{invalidName}</p>
                }  
            </div>
            <div className="mb-3">
                <label  className="form-label">Address: </label>
                <input type="text" className="form-control" placeholder="Address" 
                    onChange={handleAddress}
                />
                                {
                  addressError && <p className="text-danger">{invalidAddress}</p>
                }
            </div>
            <div className="mb-3">
                <button className="btn btn-outline-info">Add Wallet</button>
            </div>
      </form>
    </>
  )
}

export default WalletForm;