import React, { useEffect, useState } from 'react'
import './Dashboard.scss';
import { useTypedSelector } from '../../hooks/useTypedSelectors';
import { useActions } from '../../hooks/useActions';
import Wallet from '../../components/wallet/Wallet';
import { WalletI } from '../../models/wallet.interface';
import WalletForm from '../../components/wallet-form/Wallet-form';
import Loading from '../../components/loading/Loading';

const Dashboard: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
    const { walletInfo, error, loading } = useTypedSelector((state) => state.wallets);
    const { getWallets } = useActions();

    useEffect(() => {
        if(!walletInfo){
            getWallets();
        }    
    },[walletInfo]);

    const renderedWallets = walletInfo?.map((wallet: WalletI) => 
         <Wallet key={wallet?._id} wallet={wallet} />
    );

    const toggleShowForm = () => {
      setShowForm(!showForm);
    } 
  return (
    <>
      <h1 className="page-title">Dashboard</h1>
      <div className="mb-3">
                <button 
                  className="btn btn-outline-info"
                  onClick={toggleShowForm}
                >
                  {!showForm ? 'Add Wallet ' : 'Close Form '} 
                  {!showForm ? 
                      <i className="fa-solid fa-plus"></i>
                    : <i className="fa-solid fa-minus"></i>
                  }
                </button>
      </div>
      {loading && <Loading /> } 
      { showForm && <WalletForm />}
      {error && !loading && !walletInfo &&
        <div className="alert alert-danger" role="alert">
          <i className="fa-solid fa-triangle-exclamation"></i>  Server Error
        </div>
      }
      {walletInfo && <>{renderedWallets} </>}
        
     
    </>
  )
}

export default Dashboard;