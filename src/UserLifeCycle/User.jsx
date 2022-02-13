import React, { Component } from "react";
import Axios from "axios";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { user: [] }
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ user: response.data })
            })
            .catch()
    }
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state.user)}</pre>
                <h2>User Data</h2>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <table className="table table-dark">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.user.map((singleuser) => {
                                            return <tr>
                                                <td>{singleuser.id}</td>
                                                <td>{singleuser.name}</td>
                                                <td>{singleuser.email}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};
export default User;