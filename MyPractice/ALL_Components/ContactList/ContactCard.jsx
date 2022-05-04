import React, { Component } from "react";

class ContactCard extends Component{
    render() {
        let { contact } = this.props;
        return(
            <>
            <div className="card">
                <div className="card-header bg-success">
                    <p className="h3">Conatct Details</p>
                </div>
                <div className="card-header">
                    <div className="align-center">
                        <img src={contact.picture.large} alt="" />
                    </div>
                </div>
                <div className="card-body">
                    <pre>{JSON.stringify(contact)}</pre>
                    <ul className="list-group">
                        <li className="list-group-item">{contact.name.first}</li>
                        <li className="list-group-item">{contact.dob.age}</li>
                        <li className="list-group-item">{contact.email}</li>
                        <li className="list-group-item">{contact.gender}</li>
                    </ul>
                </div>
            </div>
            </>
        )
    }
};
export default ContactCard;