import React, {useRef} from "react";

const Login = () => {
    let buttonRef = useRef(null)
    let clickHandler = (event) => {
        console.log(buttonRef.current);
        event.preventDefault();
        
    buttonRef.current.disabled = false
    }
    return(
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-5">
                        <form>
                            <div className="form-group">
                                <input text="text" className="form-control" />
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" onChange={clickHandler} />
                                Terms & Conditions
                            </div>
                            <input type="button" className="btn btn-warning" value="login" ref={buttonRef} disabled />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Login;