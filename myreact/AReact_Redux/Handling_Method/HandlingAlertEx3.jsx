import React, {Component} from "react";

class HandlingAlertEx3 extends Component {
    showAlert() {
        alert("I'm an alert");
    }
    render() {
        return(
            
            <button onClick={this.showAlert}>Show alert</button>
            
        )
    }
}
export default HandlingAlertEx3;