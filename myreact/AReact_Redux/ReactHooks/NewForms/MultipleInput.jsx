import React, {useState} from "react";

const Multipleinput = () => {
    const [user, setUser] = useState({user_name:"", email:"", password:"", phone:""})
    const [records, setRecords] = useState([])
    const changeInput = (event) =>{
        const name = event.target.name 
        const value = event.target.value 
        console.log(name, value);
        setUser({...user,[name]:value})
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const newrecord = {...user,id:new Date().getTime().toString()}
        setRecords([...records,newrecord])
        console.log(records);
        setUser({user_name:"", email:"", password:"", phone:""})
    }
    return(
        <div>
            <h1 align="center">Form</h1>
            <pre>{JSON.stringify(user)}</pre>
            <form onSubmit={submitHandler}>
                <label>User Name</label>
                <input type="text" className="form-control" placeholder="Enter User Name" name="user_name" id="user_name" 
                value={user.user_name} onChange={changeInput} />
                <label>Email</label>
                <input type="text" className="form-control" placeholder="Enter Email" name="email" id="email"
                value={user.email} onChange={changeInput} />
                 <label>Password</label>
                 <input type="password" className="form-control" placeholder="Enter Password" name="password" id="password"
                 value={user.password} onChange={changeInput} />
                 <label>Phone</label>
                 <input type="number" className="form-control" placeholder="Enter Number" name="phone" id="phone" 
                 value={user.phone} onChange={changeInput} />
                 <input type="submit" className="btn btn-success" value="submit" />
            </form>
            <div>
            {
                records.map((record)=>{
                    const{id,user_name,email,password,phone}=record
                    return(
                        <div key={id}>
                            <p>{user_name}</p>
                            <p>{email}</p>
                            <p>{phone}</p>
                            <p>{password}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
export default Multipleinput;