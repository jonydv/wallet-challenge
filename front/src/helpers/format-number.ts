import * as Web3Utils from 'web3-utils';
export const formatNumber = (number: number, currency: string) => {

    return new Intl.NumberFormat("EN-US", {
        style: 'currency',
        currency: currency
    }).format(number)
};

export const weiToEther = (ether: string) => {
    return Web3Utils.fromWei(ether);
}

export const etherToCurrency = (etherBalance: string, currencyValue: number) => {
    return Number(etherBalance) * currencyValue;
}