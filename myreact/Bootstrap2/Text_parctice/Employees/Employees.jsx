import React, { Component } from "react";
class Employees extends Component {
    employee_Data = [
        { id: 701, name: "Abisekh", email: "Abi@gmail.com" },
        { id: 702, name: "Priyanka", email: "Priya@gmail.com" },
        { id: 703, name: "Salman", email: "Sal@gmail.com" },
        { id: 704, name: "Susanta", email: "Susan@gmail.com" },
        { id: 705, name: "Sona", email: "Sona@gmail.com" },
        { id: 706, name: "Zoya", email: "Zoya@gmail.com" },
        { id: 707, name: "Rohan", email: "Roha@gamil.com" }]

    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-10">
                            <table className="table table-danger">
                                <thead className="bg-primary">
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </thead>
                                <tbody>{this.employee_Data.map((emp) => {
                                    return <tr>
                                        <td>{emp.id}</td>
                                        <td>{emp.name}</td>
                                        <td>{emp.email}</td>
                                    </tr>
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Employees;