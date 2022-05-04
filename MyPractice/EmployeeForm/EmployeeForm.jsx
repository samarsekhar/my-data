import React, {useState} from "react";

const Employee = () => {
    const [name, setName] = useState("");
    const [line1, setLine1] = useState("");
    const [line2, setLine2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [allEntry, setAllEntry] = useState([]);

   const submitHandler = (event) => {
       event.preventDefault();

       if(name && line1 && line2 && city && state){
           const newEntry = { id: new Date().getTime().toString,name,line1,line2,city,state}
           setAllEntry([...allEntry,newEntry])
           console.log(allEntry);
           setName("")
           setLine1("")
           setLine2("")
           setCity("")
           setState("")
       }
       else{   
           alert("Please Fill the all data")
       }
   }
    
    return(
        <div>
            <div className="container mt-5">
                <h2>Employee Form</h2>
                <div className="row">
                    <div className="col-md-4">
                       <form onSubmit={submitHandler}>
                           <label>Employee Name: </label>
                           <input type="text"
                                  className="form-control"
                                  placeholder="Enter Employee Name"
                                  name="name"
                                  id="name"
                                  value={name}
                                  onChange={(e) => {setName(e.target.value)}} />
                                  <br />
                            <h3>Home Address: </h3>
                            <label>Line: </label>
                            <input type="text"
                                  className="form-control"
                                  placeholder="Enter Your Address 1 "
                                  name="line1"
                                  id="line1"
                                  value={line1}
                                  onChange={(e) => {setLine1(e.target.value)}} />
                                  <br />
                            <label>Line: </label>
                            <input type="text"
                                  className="form-control"
                                  placeholder="Enter Your Address 2 "
                                  name="line2"
                                  id="line2"
                                  value={line2}
                                  onChange={(e) => {setLine2(e.target.value)}} />
                                  <br />
                            <label>City: </label>
                            <input type="text"
                                  className="form-control" 
                                  placeholder="Enter The City Name"
                                  name="city"
                                  id="city"
                                  value={city}
                                  onChange={(e) => {setCity(e.target.value)}} />
                                  <br />
                            <label>State: </label>
                            <input type="text"
                                  className="form-control"
                                  placeholder="Enter The State Name"
                                  name="state"
                                  id="state"  
                                  value={state}
                                  onChange={(e) => {setState(e.target.value)}} />
                                  <br />
                            <input type="submit"
                                   className="btn btn-success"
                                   value="submit" />
                       </form>
                    </div>

                    <div className="container mt-5">
                        <div className="row">
                    <div className="col-md-2">
                    {
                    allEntry.map((form) => {
                        const{id,name,line1,line2,city,state}=form;
                        return(
                            <div className="showDateStyle" key={id}>
                                <h5>Name: {name}</h5>
                                <h5>Line1: {line1}</h5>
                                <h5>Line2: {line2}</h5>
                                <h5>City: {city}</h5>
                                <h5>State: {state}</h5>
                            </div>
                        )
                    })
                }
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
};
export default Employee;