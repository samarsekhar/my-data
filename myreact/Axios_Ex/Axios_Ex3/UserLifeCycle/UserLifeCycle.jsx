import React, { Component } from "react";
import Axios from "axios";
class UserLifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log("First - Constructor");
        this.state = {
            user: []
        }
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ user: response.data })
            })
            .catch()
    }
    render() {
        console.log("Second - render");
        return <React.Fragment>
            <h1>Get Data</h1>
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-hover">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.user.map((singleUser) => {
                                    return <tr>
                                        <td>{singleUser.id}</td>
                                        <td>{singleUser.name}</td>
                                        <td>{singleUser.email}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    };
};
export default UserLifeCycle;