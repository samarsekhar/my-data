import React, { Component } from "react";

class ContactList extends Component {
    clickHandler = (user) => {
        this.props.selectedUser(user);
        console.log("Hello Clicking Working", user.gender);
    };
    render() {
        return (
            <>
                <div className="container">
                    <h1>Contact List</h1>
                    <table className="table table-hover table-dark">
                        <thead className="text-center">
                            <tr>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {this.props.user.map((user) => {
                                return (
                                    <tr onClick={this.clickHandler.bind(this, user)} key={user.login.uuid}>
                                        <td>{user.name.first} {user.name.last}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.dob.age}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </>
        )
    }
};
export default ContactList;