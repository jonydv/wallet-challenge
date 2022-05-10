import React, { useState } from 'react'
import './WalletSelector.scss';
import { WalletSelectorProps } from '../../models/wallet.interface';
import { etherToCurrency, formatNumber } from '../../helpers/format-number';

const WalletSelector: React.FC<WalletSelectorProps> = ({exchange, etherBalance}) => {

    const [exchangeValue, setExchangeValue] = useState(
            etherToCurrency(etherBalance, exchange.USD)
            );
    const [currencySelected, setCurrencySelected] = useState('USD');

    const updateRate = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrencySelected(e.target.value)
        setExchangeValue(etherToCurrency(etherBalance, exchange[e.target.value]));
      }
    


  return (
    <>{
        exchange && 
        <>
            <div className="wallet__card-selector">
            <select value={currencySelected} onChange={updateRate} className="form-select">
                <option value={Object.keys(exchange!)[0]} >{Object.keys(exchange!)[0]}</option>
                <option value={Object.keys(exchange!)[1]}>{Object.keys(exchange!)[1]}</option>
            </select>
            </div>
            <div className="wallet__card-content">
                <p className="wallet__card-content-info">{formatNumber(exchangeValue, currencySelected)}</p>
            </div>
      </>
      }
    </>
  )
}

export default WalletSelector;