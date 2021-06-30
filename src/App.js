import Header from './components/Header';
import './App.css';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from './Context/GlobalState';
import React, {useState} from 'react';
import LoginForm from './Login/LoginForm';



const adminUser= {
  name: "Vincent Luague",
  username: "test",
  password: "test"
} 



const App = (props) =>{
  const [user, setUser] = useState ({name: "",username: ""});
  const [error, setError] = useState("");
  const Login = details =>{
    console.log(details);


    if(details.username === adminUser.username && details.password === adminUser.password){
    console.log("Logged in");
    setUser({
      name: details.name,
      username: details.username
    });
  }
  else{
    console.log("Details Do not match");
    setError("Details Do not match");
  }
}
  const Logout = () =>{
    setUser({name: "",username: ""});
  }

  return (
   
    <div className="App">
     {(user.username !== "")? ( 
       
      <div className="container">
      <h2>Welcome, <span>{adminUser.name}</span></h2>
      <button className="btn btn-secondary" onClick={Logout}>Logout</button>
     
   <GlobalProvider>
   
     <Header/>
     <div className="container">
     <Balance/>
     <IncomeExpenses/>
     <TransactionList/>
     <AddTransaction/>
     </div>
     
     </GlobalProvider>  
    </div>
  
  ):
  (
<LoginForm Login={Login} error={error} />
)}
</div>

  )
 
};

export default App;
