import React, {Component} from "react";

class Classtimer extends Component {
    constructor(props){
        super(props);
        this.state = {
            timer: 0
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(preventState =>({ timer:preventState.timer + 1}))
        }, 1000)
    }
    componentWillMount() {
        clearInterval(this.interval)
    }
    render() {
        return(
            <div align="center">
                <h1> Class Timer - {this.state.timer}</h1>
                <button onClick={() =>{clearInterval(this.interval)}}>
                    Stop Timer
                </button>
            </div>
        )
    }
};
export default Classtimer;