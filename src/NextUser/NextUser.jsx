import React from "react";
import Axios from "axios";
class NextUser extends React.Component {
    state = {
        user: []
    }
    getData_Handler = () => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ user: response.data })
            })
            .catch()
    }
    render() {
        return <React.Fragment>
            <h1>User Data</h1>
            <pre>{JSON.stringify(this.state.user)}</pre>
            <button onClick={this.getData_Handler} >Get Data</button>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-hover">
                            <thead className="bg-dark text-white" >
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.user.map((nextUser) => {
                                    return <tr>
                                        <td>{nextUser.id}</td>
                                        <td>{nextUser.name}</td>
                                        <td>{nextUser.email}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}
export default NextUser;