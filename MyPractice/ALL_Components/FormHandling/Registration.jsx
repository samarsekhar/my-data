import React, {useState} from "react";

let Registration = () => {
    let [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
    });
    let updateHandler = (event) => {
        setUser({...user, [event.target.name]: event.target.value});
    };
    let submitHandler =(event) => {
        console.log(user);
        event.preventDefault();
    };
    return(
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <p className="h4">Registration</p>
                            <pre>{JSON.stringify(user)}</pre>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                <div className="form-group">
                                    <input type="text"
                                           className="form-control"
                                           placeholder="User Name"
                                           onChange={updateHandler}
                                           name="name" 
                                    /> <br />
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                           className="form-control"
                                           placeholder="Email ID"
                                           onChange={updateHandler}
                                           name="email"
                                    /> <br />
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                           className="form-control"
                                           placeholder="Password"
                                           onChange={updateHandler}
                                           name="password"
                                    /> <br />
                                </div>
                                <div className="form-group">
                                    <input type="number"
                                           className="form-control"
                                           placeholder="Mobile"
                                           onChange={updateHandler}
                                           name="mobile"
                                    /> <br />
                                </div>
                                <div className="form-group">
                                    <input type="submit"
                                           className="form-control btn btn-success"
                                           value="submit"
                                     />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};
export default Registration;