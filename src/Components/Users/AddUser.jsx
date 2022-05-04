import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
    });

    const { name, username, email, phone, website } = user;
    const onInputChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const onSubmit = async e => {
        e.preventDefault();
        await Axios.post("http://localhost:3003/users", user);
        history.push("/");
    };

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input 
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Enter your name"
                              name="name"
                              value={name}
                              onChange={e => onInputChange(e)}
                              />
                    </div>
                    <div className="form-group">
                        <input 
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Enter your username"
                              name="username"
                              value={username}
                              onChange={e => onInputChange(e)}
                              />
                    </div>
                    <div className="form-group">
                        <input
                              type="email"
                              className="form-control form-control-lg"
                              placeholder="Enter your email address"
                              name="email"
                              value={email}
                              onChange={e => onInputChange(e)}
                              />
                    </div>
                    <div className="form-group">
                        <input
                              type="number"
                              className="form-control form-control-lg"
                              placeholder="Enter your number"
                              name="phone"
                              value={phone}
                              onChange={e => onInputChange(e)}
                              />
                    </div>
                    <div className="form-group">
                        <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Enter your website name"
                              name="website"
                              value={website}
                              onChange={e => onInputChange(e)}
                              />
                    </div>
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser;