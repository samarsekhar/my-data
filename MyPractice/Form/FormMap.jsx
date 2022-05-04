import React, {useState} from "react";

const Form = () => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);

    const submitHandler = (event) => {
        event.preventDefault();

        if(email && password){
            const newEntry={id: new Date().getTime().toString(),email,password}
            setAllEntry([...allEntry,newEntry])
            console.log(allEntry);
            setEmail("")
            setPassword("")
        }
        else{
            alert("Please fill the data")
        }
    }
    return(
        <>
        <div className="container mt-5">
            <h2>FORM</h2>
            <div className="row">
                <div className="col-md-5">
                    <form onSubmit={submitHandler}>
                        <label>User Name</label>
                        <input type="text"
                               className="form-control"
                               placeholder="Enter Your Name"
                               name="user"
                               id="user"
                               value={user}
                               onChange={(e) => {setUser(e.target.value)}} />
                               <br />
                        <label>Email</label>
                        <input type="email" 
                               className="form-control" 
                               placeholder="Enter A Valid Email Address"
                               name="email"
                               id="email"
                               value={email}
                               onChange={(e) => {setEmail(e.target.value)}} />
                               <br />
                        <label>Password</label>
                        <input type="password"
                               className="form-control"
                               placeholder="Enter Your Password"
                               name="password"
                               id="password"
                               value={password}
                               onChange={(e) => {setPassword(e.target.value)}} />
                               <br />
                        <input type="submit"
                               className="btn btn-success"
                               value="sumbit" />
                    </form>
                </div>
                {
                    allEntry.map((form) => {
                        const{id,user,email,password}=form;
                        return(
                            <div className="showDateStyle" key={id}>
                                <p>Email Id: {email}</p>
                                <p>Password: {password}</p>
                                <p>User Name: {user}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
};
export default Form;