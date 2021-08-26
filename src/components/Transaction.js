import React,{useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Transaction = ({transaction}) => {
    const {deleteTransaction}= useContext (GlobalContext);
    const sign = transaction.amount< 0 ? '-':'+';

    return (
      <li className={transaction.amount < 0 ? 'minus-ex':'plus-in'}>
        {transaction.text}<span>{transaction.date}</span> <span>{sign}₱ {Math.abs(transaction.amount)}</span>
        <button onClick={()=> deleteTransaction(transaction.id)} className="delete-btn"><FontAwesomeIcon icon={faTimesCircle} /></button>
        {/* <button onClick={()=> editTransaction(transaction.text)} className="edit-btn"><FontAwesomeIcon icon={faTimesCircle} /></button> */}
      </li>
    )
}

export default Transaction;
