import React, { Component } from "react";
class Contact1 extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <form className="" >
                            <div className="form-group" >
                                <input type="text" className="form-control" placeholder="Please Enter Email" />
                            </div>
                            <div className="form-group" >
                                <input type="password" name="" id="" className="form-control" placeholder="Please Enter Password" />
                            </div>
                            <button className="btn btn-success mr-2" >Login</button>
                            <button className="btn btn-warning" >Reset</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};
export default Contact1;