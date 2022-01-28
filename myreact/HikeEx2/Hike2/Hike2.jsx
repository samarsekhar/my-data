import React, { Component } from "react";
class Hike extends Component {
    state = {
        salary: 50000
    }
    setHikeHandler = (hike) => {
        this.setState({ salary: this.state.salary + hike })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="card">
                                <div className="card_header">
                                    <h1>{this.state.salary}</h1>
                                </div>
                                <div className="card_body">
                                    <h2>Hike Component</h2>
                                    <button className="btn btn-success mr-3" onClick={this.setHikeHandler.bind(this, 10000)}>Hike 10k</button>
                                    <button className="btn btn-warning mr-3" onClick={this.setHikeHandler.bind(this, 20000)}>Hike 20k</button>
                                    <button className="btn btn-primary" onClick={this.setHikeHandler.bind(this, 40000)}>Hike 40k</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Hike;