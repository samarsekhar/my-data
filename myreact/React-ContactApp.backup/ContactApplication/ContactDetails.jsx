import React, { Component } from "react";
class ContactDetails extends Component {
    render() {
        return (
            <div>
                <h1>Contact Details</h1>
                <div className="container mt-5">
                    <pre>{JSON.stringify(this.props.details)}</pre>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <img src={this.props.details.picture.large} alt="" />
                                </div>
                                <div className="card-body" >
                                    <ul className="list-group">
                                        <li className="list-group-item">{this.props.details.email}</li>
                                        <li className="list-group-item">{this.props.details.gender}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactDetails;