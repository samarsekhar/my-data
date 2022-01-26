import React, { Component } from "react";
class Hike extends Component {
    state = {
        salary: 45000,
    }
    setHikeHandler = (hike) => {
        console.log("Test");
        this.setState({ salary: this.state.salary + hike })
    };
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="cal-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3>Salary:{this.state.salary}</h3>
                            </div>
                            <div className="card-body">
                                <button className="btn btn-primary mr-2" onClick={this.setHikeHandler.bind(this, 10000)}>10k</button>
                                <button className="btn btn-success mr-2" onClick={this.setHikeHandler.bind(this, 50000)}>50k</button>
                                <button className="btn btn-danger" onClick={this.setHikeHandler.bind(this, 100000)}>100k</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Hike;