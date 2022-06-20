import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Home from "./Home";

function Login() {
    const [emaillog, setEmailLog] = useState(" ");
    const [passwordlog, setPasswordLog] = useState("");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);


    const handleLogin = (e) => {
        e.preventDefault();

        let pass = localStorage.getItem('password').replace(/"/g, "");
        let mail = localStorage.getItem('email').replace(/"/g, "");
     // .replace(/"/g,"") is used to remove the double quotes for the string

     if(!emaillog || !passwordlog){
        setFlag(true);
        console.log("Empty");
     }
     else if ((passwordlog !== pass) || (emaillog !== mail)) {
        setFlag(true);
     }
     else {
        setHome(!home);
        setFlag(false);
     }
    }
  return (
    <div>
      {home ? <form onSubmit={handleLogin}>
        <h3>LOGIN</h3>
        <div className='form-group'>
            <label>Email</label>
            <input type='email' className='form-control' placeholder='Enter Your Email'
                   onChange={(e) => setEmailLog(e.target.value)} />
        </div>
        <div className='form-group'>
            <label>Password</label>
            <input type="password" className='form-control' placeholder='Enter Your Password'
                   onChange={(e) => setPasswordLog(e.target.value)} />
        </div> <br />
        <button type='submit' className='btn btn-dark btn-lg btn-block'>Login</button>
        {flag && <Alert color='primary' variant='warning'>
            Fill the correct info keep trying.
            </Alert>}
      </form>: <Home/>}
    </div>
  )
};

export default Login;
