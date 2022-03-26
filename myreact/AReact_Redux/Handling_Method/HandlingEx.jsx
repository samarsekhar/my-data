import React,{Component} from "react";

class HandlingEx extends Component {
    constructor(props){
        super(props);
        this.state = {handling: true};
        
        // This binding is necessary to make `this` work in the callback

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(preventDefault => ({
            handling: !preventDefault.handling
        }));
    }
    render() {
        return (
             <button onClick={this.handleClick}>{this.state.handling ? "ON" : "OFF"}</button>
        );
    }
} 
export default HandlingEx;