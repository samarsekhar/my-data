import React, { Component } from "react";
class Hikee extends Component {
    state = {
        salary: 50000,
    }
    setHikeHandler = (hike) => {
        console.log();
        this.setState({ salary: this.state.salary + hike })
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="cal-md-10">
                        <div className="card">
                            <div className="card-header">
                                <h2>{this.state.salary}</h2>
                            </div>
                            <div className="card-body">
                                <button className="btn btn-primary mr-3" onClick={this.setHikeHandler.bind(this, 10000)}>10k</button>
                                <button className="btn btn-warning mr-3" onClick={this.setHikeHandler.bind(this, 50000)}>50k</button>
                                <button className="btn btn-success" onClick={this.setHikeHandler.bind(this, 100000)}>100k</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Hikee;