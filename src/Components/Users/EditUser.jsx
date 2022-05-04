import React, {useState, useEffect} from "react";
import Axios from "axios";
import {useHistory, useParams} from "react-router-dom";

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
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

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await Axios.put(`http://localhost:3003/users/${id}`, user);
        history.push("/");
    };

    const loadUser = async () => {
        const result = await Axios.get(`http://localhost:3003/user/users/${id}`);
        setUser(result.data);
    };

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A User</h2>
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
                              placeholder="Enter your phone number"
                              name="phone"
                              value={phone}
                              onChange={e => onInputChange(e)}
                              />
                    </div>
                    <div className="form-group">
                        <input
                              type="text"
                              className="form-control from-control-lg"
                              placeholder="Enter your website name"
                              name="website"
                              value={website}
                              onChange={e => onInputChange(e)}
                              />
                    </div>
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
        </div>
    )
};

export default EditUser;