import React, { useEffect, useState } from 'react'
import './Dashboard.scss';
import { useTypedSelector } from '../../hooks/useTypedSelectors';
import { useActions } from '../../hooks/useActions';
import Wallet from '../../components/wallet/Wallet';
import { WalletI } from '../../models/wallet.interface';
import WalletForm from '../../components/wallet-form/Wallet-form';
import Loading from '../../components/loading/Loading';

const Dashboard: React.FC = () => {
    const [sorted, setSorted] = useState(false);
    const { walletInfo, error, loading } = useTypedSelector((state) => state.wallets);
    const { exchangeInfo } = useTypedSelector((state) => state.exchange);
    const { getWallets, getExchange } = useActions();

    useEffect(() => {
        if(!walletInfo){
            getWallets(sorted);
        };
        if(!exchangeInfo){
          getExchange();
        }    
    },[walletInfo, exchangeInfo, sorted]);

    const renderedWallets = walletInfo?.map((wallet: WalletI) => 
         <Wallet key={wallet?._id} wallet={wallet} exchange={exchangeInfo!}/>
    );

    const handleSort = () => {
      getWallets(!sorted);
      setSorted(!sorted);
    }

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
      {      
      }
      {walletInfo && exchangeInfo && 
        <>
            <div className="m-4 sort">
                    <button 
                      className="btn btn-outline-info"
                      onClick={handleSort}
                    >
                      Sort by favorite
                    </button>
          </div>
          {renderedWallets} 
        </>
      }
        
     
    </>
  )
}

export default Dashboard;