import React, {useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';
const Balance = () => {
    const {transactions} = useContext (GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    console.log(amounts);
    const total = amounts.reduce((acc,item)=> (acc+= item),0).toFixed(2);


    return (
        <>
      <h4>Budget Balance</h4>
      <h1>PHP {total}</h1>
        </>
    )
}

export default Balance;
