import React, {Component} from "react";
import Axios from "axios";
import ContactCard from "./ContactCard";

class ContactApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            contacts: [],
            selectedContact: {},
        }
    }
    componentDidMount(){
        let dataURL = "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
        Axios.get(dataURL)
             .then((response) => {
                 this.setState({ contacts: response.data})
             })
             .catch()
    }
    getContactData = (contact) => {
        this.setState({
            selectedContact: contact,
        })
    }
    render(){
        return(
            <>
            <div className="container mt-4">
                <p className="h2 bg-success">ContactApp</p>
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-dark text-white">
                        <thead className="thead-white">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.contacts.length > 0 ? (
                            <>
                            {this.state.contacts.map((contact) => {
                                return(
                                    <tr key={contact.email} onClick={this.getContactData.bind(this, contact)} >
                                        <td>{contact.name.first}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.location.city}</td>
                                    </tr>
                                )
                            })}
                            </>
                            ): null}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4">
                    {Object.keys(this.state.selectedContact).length > 0 ? (
                        <>
                        <ContactCard contact={this.state.selectedContact} />
                        </>
                    ): null}
                </div>
            </div>
            </div>
            </>
        )
    }
};
export default ContactApp;