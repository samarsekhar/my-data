import React, { Component } from "react";

class SMSApp extends Component {
    state = { count: 100, maxLen: 100 }
    updateCountHandler = (event) => {
        this.setState({ count: this.state.maxLen - event.target.value.length })
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-success">
                                <h2>SMS Application</h2>
                            </div>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <textarea cols="30" rows="5" onChange={this.updateCountHandler} className="form-control" maxLength={this.state.maxLen} >
                                        </textarea>
                                    </div>
                                    <h6>Remaining Char's{this.state.count}</h6>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    };
};
export default SMSApp;