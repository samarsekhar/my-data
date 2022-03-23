import React, {useState} from "react";

const BasicForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);

    const submitHandler = (event) => {
        event.preventDefault();
        const newEntry = {email:email, password:password}
        setAllEntry([...allEntry, newEntry])
        console.log(allEntry);

    }

    return(
        <div>
            <h1 align="center"> Login Form</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form onSubmit={submitHandler}>
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter A vaild Email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} /> <br />
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter Your Password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}} /> <br />
                            <input type="submit" className="btn btn-primary" value="login"/>
                        </form>
                        <div>
                            {
                                allEntry.map((curlElem) => {
                                    const{id,email,password}=curlElem;
                                    return(
                                        <div className="showDataStyle" key={id}>
                                            <p>{email}</p>
                                            <p>{password}</p> 
                                            </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BasicForm;