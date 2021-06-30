import React, {useState} from 'react';
import './LoginForm.css';

import user from '../user.jpg'



const LoginForm = ({Login,error })=> {
    
    const [details,setDetails]=useState ({name: "",username:"",password:""});
    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
    }
    

    return (
       
       <form onSubmit={submitHandler}> 
        <div className="form-inner">
        <img src={user} alt="user" className="user-icon" />
        
            <h2> Welcome User! </h2>
            {(error!== "")? (<div className="error"><span className="error">{error}</span> </div>)  :""}
            {/* <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name = "name" id="name" onChange={e =>setDetails({...details,name: e.target.value})} value={details.name}/>
            </div> */}
            <div className="form-group">
                     <label htmlFor="username">Username:</label>
                     <input type="text" name = "username" id="username" onChange={e =>setDetails({...details,username: e.target.value})} value={details.username}/>
            </div>
            <div className="form-group">
                     <label htmlFor="password ">Password:</label>
                     <input type="password" name = "password" id="password" onChange={e =>setDetails({...details,password: e.target.value})} value={details.password}/>
            </div> 
            <input type ="submit" className="btn btn-primary" value="Login "/>
           
            {/* {!isEditing && <button onClick={startEditingHandler} className="btn btn-secondary"> Add Account </button>}
            {isEditing && <AddAccount onCancel={stopEditingHandler} onSaveUserData= {saveUserDataHandler}/>} */}
        </div>

       </form>
       
    )
}

export default LoginForm;
