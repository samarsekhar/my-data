import React, {useState} from "react";

let Registration = () => {
    let [state, setState] = useState({name:"", email:"", password:""});

    let nameHandler = (event) => {
        console.log(event.target.value);
        setState({...state, name:event.target.value})
    }
    let emailHandler = (event) => {
        console.log(event.target.value);
        setState({...state, email:event.target.value})
    }
    let passwordHandler = (event) => {
        console.log(event.target.value);
        setState({...state, password:event.target.value})
    }
    let submitHandler = (event) => {
        console.log(state);
        event.preventDefault();
    }
      return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Registration Form</h1>
                        <pre>{JSON.stringify(state)}</pre>
                        <form onSubmit={submitHandler}>
                            <label>User Name</label>
                            <input type="text" className="form-control" onChange={nameHandler} /> <br />
                            <label>Email ID</label>
                            <input type="text" className="form-control" onChange={emailHandler} /> <br />
                            <label>Password</label>
                            <input type="text" className="form-control" onChange={passwordHandler} /> <br /> 
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Registration;