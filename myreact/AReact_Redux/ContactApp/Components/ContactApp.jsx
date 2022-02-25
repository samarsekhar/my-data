import React, { Component } from "react";
import Axios from "axios";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";

class ContactApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [], selectedUserDetails: {},
        };
    };

    selectedUser = (user) => {
        console.log("Child to Parent", user.name.last);
        this.setState({ selectedUserDetails: user });
    };

    componentDidMount() {
        Axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")
            .then((response) => {
                this.setState({ user: response.data })
                console.log(this.state.user);
            })
            .catch()
    };
    render() {
        return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <ContactList user={this.state.user} selectedUser={this.selectedUser} />
                        </div>
                        <div className="col-md-4">
                            <ContactDetails details={this.state.selectedUserDetails} />
                        </div>
                    </div>
                </div>
            </>
        );
    };
};
export default ContactApp;