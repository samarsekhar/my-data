import React from "react";
class Message extends React.Component {
    constructor(props) {
        super(props);
        console.log("first - const");
        this.state = {
            message: "Hello.."
        }
    }
    onWishHandler = (msg) => {
        console.log(msg);
        this.setState({ message: msg });
    }
    render() {
        console.log("second - react method");
        return <React.Fragment>
            <h3>Message Value:{this.state.message}</h3>
            <button onClick={this.onWishHandler.bind(this, "Good Morning")}>GM</button>
            <button onClick={this.onWishHandler.bind(this, "Good Afternoon")}>GA</button>
            <button onClick={this.onWishHandler.bind(this, "Good Night")}>GN</button>
        </React.Fragment>
    }
}
export default Message;