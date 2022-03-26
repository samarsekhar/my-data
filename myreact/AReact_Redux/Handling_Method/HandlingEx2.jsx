import React, {Component} from "react";

class HandlingEx2 extends Component {
    
    // This syntax ensures `this` is bound within handleClick.

    // Warning: this is *experimental* syntax.

    handleClick = () => {
        console.log("This is : ", this);
    }
    
    render() {
        return(
            <button onClick={this.handleClick}>
                Click me
            </button>
        )
    }
};
export default HandlingEx2;