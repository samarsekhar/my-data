import React, { Component } from "react";
import Axios from "axios";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";

class ContactApp extends Component {
    constructor(props) {
        super(props)
        this.state = { contact: [], selectedContact: {} }
    }
    getSelectedContact = (contact) => {
        console.log(contact);
        this.setState({ selectedContact: contact })
    }
    componentDidMount() {
        Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
            .then((response) => {
                this.setState({ contact: response.data })
            })
            .catch()
    }
    render() {
        return (
            <>
                <pre>{JSON.stringify(this.state.selectedContact)}</pre>
                <h4>Contact App</h4>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            {
                                this.state.contact.length > 0 ? <> <ContactList contact={this.state.contact} selContact={this.getSelectedContact} />
                                </> : null
                            }
                        </div>
                        <div className="col-md-4">
                            {
                                Object.keys(this.state.selectedContact).length > 0 ? <> <ContactDetails details={this.state.selectedContact} />
                                </> : null
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default ContactApp;