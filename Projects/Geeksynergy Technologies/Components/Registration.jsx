import React, { useState } from 'react';
import { Form, Alert} from 'react-bootstrap';
import Login from './Login';

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [profession, setProfession] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info, setInfo] = useState(true);

    //onSubmit form

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!name || !email || !password || !phone || !profession){
            setFlag(true);
        }
        else{
            setFlag(false);
            localStorage.setItem('email', JSON.stringify(email));
            localStorage.setItem('password', JSON.stringify(password));
            console.log("Saved in local storage");

            setLogin(!login)
        }
    }

    const handleClick = () =>{
        setLogin(!login)
    }

    const infoClick = () => {
        setInfo(!info)
    }

  return (
    <div>
      <nav className='navbar navbar-info'>
        <div className='conatiner' onClick={infoClick}>
            <h3 className='btn btn-info btn-lg btn-block'>Company Info</h3>
        </div>
      </nav>
      {
        info ? <div> {login ? <form onSubmit={handleFormSubmit}>
            <h2>Register</h2>
            <div className='form-group'>
                <label>Name</label>
                <input type='text' className='form-control' placeholder='Enter Full Name'
                       name='name' onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input type='text' className='form-control' placeholder='Enter Your Email'
                       name='email' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type='password' className='form-control' placeholder='Enter Your Password'
                       name='password' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Phone No.</label>
                <input type='number' className='form-control' placeholder='Enter Your Number'
                       name='phone' onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Choose Your Profession</label>
                <Form.Control as='select' onChange={(e) => setProfession(e.target.value)} >
                <option>Developer</option>
                <option>Front-end Developer</option>
                <option>Back-end Developer</option>
                <option>Full Stack Developer</option>
                <option>Design Engineer</option>
                <option>Senior Developer</option>
                </Form.Control>
            </div> <br />
            <button type='submit' className='btn btn-dark btn-lg btn-block'>Register</button>
            <p className='forgot-password text-right'>Already registered 
                <a href='#' onClick={handleClick}>Login</a>
                </p> 
                {flag && <Alert color='primary' variant='danger' >
                    Please input every fields
                    </Alert>
                }
        </form> : <Login/>}

      
    </div> : <div>
        <p><strong>Company:</strong>Geeksynergy Technologies PVT Ltd</p>
        <p><strong>Address:</strong>Sanjaynagar, Bengaluru - 56</p>
        <p><strong>Phone:</strong>XXXXXXXXX09</p>
        <p><strong>Email:</strong>XXXXXX@gmail.com</p>
    </div>}
  </div>
  )
}

export default Registration;
