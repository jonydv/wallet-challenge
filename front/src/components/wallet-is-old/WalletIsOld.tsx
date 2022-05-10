import React from 'react'
import { WalletIsOldProps } from '../../models/wallet.interface';

const WalletIsOld: React.FC<WalletIsOldProps> = ({isOld}) => {
  return (
    <>{ isOld &&
        <div className="alert alert-danger" role="alert">
            <i className="fa-solid fa-triangle-exclamation"></i>  Wallet is old!
        </div>
    }
    </>
  )
}

export default WalletIsOld;