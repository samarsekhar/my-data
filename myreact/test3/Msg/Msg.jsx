import React from "react";
class Msg extends React.Component {
    state = {
        msg: "Welcome to PSA",
    }
    gmHandler = () => {
        this.setState({ msg: "Hello, Good Morning" })
    };
    gaHandler = () => {
        this.setState({ msg: "Good afternoon" })
    };
    gnHandler = () => {
        this.setState({ msg: "Good Night, Take Rest" })
    }
    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                <button className="btn btn-danger mr-2" onClick={this.gmHandler}>gm</button>
                <button className="btn btn-primary mr-2" onClick={this.gaHandler}>ga</button>
                <button className="btn btn-success" onClick={this.gnHandler}>gn</button>
            </div>
        )
    }
}
export default Msg;