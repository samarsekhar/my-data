import React from "react";
import Axios from "axios";
class User extends React.Component {
    constructor(props) {
        super(props);
        console.log("First Constructor !");
    }
    getData_Handler = () => {
        //console.log("Button Clicked");
        Axios.get()
            .then()
            .catch()
    }
    render() {
        console.log("Second Render Method");
        return <React.Fragment>
            <h1>User Data</h1>
            <button onClick={this.getData_Handler}> Get Data </button>
        </React.Fragment>
    }
}
export default User;