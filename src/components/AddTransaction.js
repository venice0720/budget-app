import React,{useState,useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator} from '@fortawesome/free-solid-svg-icons';

const AddTransaction =  () => {
    const [text,setText] = useState('');
    const [date,setDate] = useState('');
    const [amount, setAmount] = useState(0);
    const {addTransaction} = useContext (GlobalContext);
   
    const {editTransaction} = useContext (GlobalContext);
    

    const onSubmit = e =>{
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount,
            date: date
        }
         addTransaction(newTransaction);
    };


    return (
        <>
        <h3> <FontAwesomeIcon icon={faCalculator} /> Add New Transaction</h3>
            <Form onSubmit={onSubmit}>
             <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control size="lg" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                  <Form.Label>Amount</Form.Label>
                  <Form.Control size="lg" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                  <Form.Label>Date</Form.Label>
                  <Form.Control size="lg" type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Enter Date..." />
             </Form.Group>
             <Button variant="primary" type="submit">
               Add Transaction
             </Button>
            </Form>
        </>
    )
};

export default AddTransaction;