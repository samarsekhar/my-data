import React, { Component } from "react";
import Axios from "axios";
import DataTable from "../DataTable/DataTable";
class CompUsers extends Component {
    constructor(props) {
        super(props);
        this.state = { usersCollection: [] };
    }
    componentDidMount() {
        Axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                this.setState({ usersCollection: response.data });
            })
            .catch(function (err) {
                console.log(err);
            })
    }
    dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        })
    }
    render() {
        return (
            <div className="wrapper-users">
                <div className="container mt-4">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    };
};
export default CompUsers;