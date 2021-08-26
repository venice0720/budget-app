import React, {useContext} from 'react';
import Transaction from './Transaction';
import {GlobalContext} from '../Context/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';

const TransactionList = () => {
const {transactions} = useContext (GlobalContext);
    
    return (
        <>
          <h3><FontAwesomeIcon icon={faList} /> History</h3>
             <div className="income-list">
                 <h4><FontAwesomeIcon icon={faMoneyBillAlt} />Income/Expenses</h4>
                      <ul className="list">
                          {transactions.map(transaction =>(<Transaction key= {transaction.id} transaction={transaction} />))}
                      </ul>
             </div>
       </>
    )
}

export default TransactionList
