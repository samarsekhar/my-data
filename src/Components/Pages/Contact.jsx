import React from "react";

const Contact = () => {
    return(
        <div className="container">
            <div className="py-4">
                <h1>Contact Page</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail">Email Address</label>
                        <input
                              type="email"
                              className="form-control"
                              placeholder="Enter your email"
                              id="exmpleInputEmail"
                              aria-describedby="emailHelp"
                            />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div> <br />
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword">Password</label>
                        <input 
                              type="password"
                              className="form-control"
                              placeholder="Enter your password"
                              id="exampleInputPassword"
                              />
                    </div> <br />
                    <div className="form-group form-check">
                        <input 
                             type="checkbox"
                             className="form-check-input"
                             id="exampleCheck"
                            />
                        <label className="form-check-label" htmlFor="exampleCheck">
                            Check me out
                        </label>
                        </div>  <br />
                        <button type="sumbit" className="btn btn-primary">
                            Submit
                        </button>
                </form>
            </div>
        </div>
    )
};

export default Contact;