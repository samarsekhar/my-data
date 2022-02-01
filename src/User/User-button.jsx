import React from "react";
import Axios from "axios";
class User extends React.Component {
    state = {
        user: []
    }
    getData_Handler = () => {
        Axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                this.setState({ user: response.data })
            })
            .catch()
    }
    render() {
        console.log("Second Render Method");
        return <React.Fragment>
            <h1>User Data</h1>
            <pre>{JSON.stringify(this.state.user)}</pre>
            <button onClick={this.getData_Handler}> Get Data </button>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-success">
                            <thead className="bg-hover">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.user.map((singleUser) = () => {
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
export default User;