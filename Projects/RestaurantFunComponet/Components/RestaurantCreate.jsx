import React, {useState} from 'react'

const RestaurantCreate = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState("");
    const [address, setAddress] = useState("");

    const create = (e) => {
        e.preventDefault();
        const data = {name, email, rating, address};
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data),
        };
        fetch("http://localhost:3000/restauranst", requestOptions)
        .then((response) => response.json())
        .then((res) => console.log(res));
        alert("Restaurant has been created");
    }
  return (
    <div align="center">
      <h1>Create Restaurant</h1>
      <form>
          <div className='form-group'>
          <input className='form-control'
          type="text"
          placeholder='Restaurant Name'
          value={name}
          onChange={(e)=>setName(e.target.value)} 
          /> 
          </div> <br/>
          <input className='form-control'
          type="text"
          placeholder='Restaurant Email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          /> <br/>
          <input className='form-control'
          type="text"
          placeholder='Restaurant Rating'
          value={rating}
          onChange={(e)=>setRating(e.target.value)}
          /> <br />
          <input className='form-control'
          type="text"
          placeholder='Restaurant Address'
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
          /> <br />
          <button className='btn btn-outline-success'
          onClick={create} 
          type="submit" >
              Add Restaurant
          </button>
      </form>
    </div>
  )
}

export default RestaurantCreate;
