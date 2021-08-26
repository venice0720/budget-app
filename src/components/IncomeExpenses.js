import React, {useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const IncomeExpenses = () => {
    const {transactions} = useContext (GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *  -1).toFixed(2);

    return (
        <div className="inc-exp-container">
             <div className="income">
                <h4 className="head-inc"><FontAwesomeIcon icon={faArrowUp} />Income</h4>
                <p className="money plus">₱ {income}</p>
             </div>
             <div className="expenses">
                <h4 className="head-exp"><FontAwesomeIcon icon={faArrowDown} />Expense</h4>
                <p className="money minus"> ₱ {expense}</p>
             </div>
         </div>
    )
}

export default IncomeExpenses;
