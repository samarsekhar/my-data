import React, { Component } from "react";
class Changeinput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }
    Changeinput(events) {
        this.setState({ name: events.target.value });
    }
    render() {
        return (
            <div>
                <label htmlFor="name">Enter text here</label>
                <input type="text" id="name" onChange={this.Changeinput.bind(this)} />
                <h3>{this.state.name}</h3>
            </div>
        )
    }
}
export default Changeinput