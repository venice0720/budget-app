import React, {createContext,useReducer} from 'react';
import AppReducer from './AppReducer';



const initialState = {
    transactions:[ { id: 1, text: 'Job Insurance', amount: -5000 },
      { id: 2, text: 'Salary', amount: 300 },
      { id: 3, text: 'Car Insurance', amount: -10 },
      { id: 4, text: 'Life Insurance', amount: 150 }]

}

//Create context
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({children}) => {
    const [state,dispatch]  = useReducer(AppReducer, initialState);



function deleteTransaction(id){
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
}
function addTransaction(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}


    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
    {children}
          </GlobalContext.Provider>);
}