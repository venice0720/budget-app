import React, {useState} from 'react';
import './LoginForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const LoginForm = ({Login,error})=> {
    const [details,setDetails]=useState ({name: "",username:"",password:""});
    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
    }

return ( 
    <div className="App">
       <form onSubmit={submitHandler} className="form text-center"> 
             <div className="form-inner">
                     <h2> Welcome User! </h2>
                {(error!== "")? (
                <div className="error">
                    <span className="error"><FontAwesomeIcon icon={faTimesCircle} /> {error}</span>
                </div>):""}    
                <div className="form-group">
                     <label htmlFor="username">Username:</label>
                     <input type="text" name = "username" id="username" onChange={e =>setDetails({...details,username: e.target.value})} value={details.username}/>
                </div>
                <div className="form-group">
                     <label htmlFor="password ">Password:</label>
                     <input type="password" name = "password" id="password" onChange={e =>setDetails({...details,password: e.target.value})} value={details.password}/>
                </div> 
                    <input type ="submit" className="btn btn-primary" value="Login "/>
             </div>
       </form>
     </div>
    )
}
export default LoginForm;
