import React, {useState} from "react";

const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);

    const submitHandler = (event) => {
        event.preventDefault();
        if(email && password){
            const newEntry={id:new Date().getTime().toString(),email,password}
            setAllEntry([...allEntry,newEntry])
            console.log(allEntry);
            setEmail("")
            setPassword("")
        }
        else{
            alert("please fill the data")
        }
    }


    return(
        <div>
            <h1 align="center">Form</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form onSubmit={submitHandler}>
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter A valid Email Address" name="email" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}} /> <br />
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter Your Password" id="password" value={password} onChange={(e) => {setPassword(e.target.value)}} /> <br />
                            <input type="submit" className="btn btn-success" value="login" /> <br />
                        </form>
                        <div>
                            {
                                allEntry.map((Form) =>{
                                    const{id,email,password}=Form;
                                    return(
                                        <div className="showDateStyle" key={id} >
                                            <h1>{email}</h1>
                                            <h1>{password}</h1> 
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
export default Form;