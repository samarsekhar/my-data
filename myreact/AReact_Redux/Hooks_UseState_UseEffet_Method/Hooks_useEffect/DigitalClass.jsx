/*import React, {Component} from "react";

class Digitalclass extends Component{
    constructor(props){
        super(props)
        console.log("Constructor - First");
        this.state = {
            currentTime : new Date().toLocaleDateString(),
        }
    }
    componentDidMount = () => {
        console.log("Third - Component Method");

        setInterval(() => {
            this.setState({
                currentTime : new Date().toLocaleTimeString()
            })
        }, 1000)
    } 
    componentWilUpdate = () => {
        console.log("Four - component - willupdate");
    }
    componentWillUnmount = () => {
        console.log("Final - will Unmount");
    }
    render() {
        console.log("Second - Render Method");
        return(
            <div>
               <h1>Digital clock using class life method</h1>
            </div>
        )
    }
};
export default Digitalclass;

*/