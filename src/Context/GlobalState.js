import React, {createContext,useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions:[ { id: 1, text: 'Job Insurance', amount: -5000, date: '2022/05/12' },
      { id: 2, text: 'Salary', amount: 300, date: '2021/08/03' },
      { id: 3, text: 'Car Insurance', amount: -10, date: '2019/01/05' },
      { id: 4, text: 'Life Insurance', amount: 150, date: '2018/05/03' }]

}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({children}) => {
    const [state,dispatch]  = useReducer(AppReducer, initialState);
    const deleteTransaction = (id) =>{
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
}
    const addTransaction = (transaction) => {
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}
    // const editTransaction = (transaction) => {
    // dispatch({
    //     type: 'EDIT_TRANSACTION',
    //     payload: transaction
    // });

return (
             <GlobalContext.Provider value=
                     {{
                         transactions: state.transactions,
                         deleteTransaction,
                         addTransaction,
                         

                     }}>
                     {children}
             </GlobalContext.Provider>);
};
