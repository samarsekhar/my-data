import React, { Component } from "react";

class ContactList extends Component {
    render() {
        let { contacts } = this.props;
        return (
            <div>
                <h1>Contact List</h1>
                <pre>{JSON.stringify(this.props)}</pre>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-primary">
                                <thead className="bg-hover text-white">
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>City</th>
                                </thead>
                                <tbody>
                                    {contacts.map((contacts) => {
                                        return <tr>
                                            <td>{contacts.login.id.substring(32)}</td>
                                            <td>{contacts.name.first}</td>
                                            <td>{contacts.location.city}</td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
export default ContactList;