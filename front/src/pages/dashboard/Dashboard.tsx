import React, { useEffect } from 'react'
import './Dashboard.scss';
import { useTypedSelector } from '../../hooks/useTypedSelectors';
import { useActions } from '../../hooks/useActions';
import Wallet from '../../components/wallet/Wallet';
import { WalletI } from '../../models/wallet.interface';
import WalletForm from '../../components/wallet-form/Wallet-form';
import Loading from '../../components/loading/Loading';

const Dashboard: React.FC = () => {
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


  return (
    <>
      <h1 className="page-title">Dashboard</h1>
      {loading && <Loading /> } 
      { !loading && <WalletForm />}
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