import React,{ useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
const RestaurantUpdate = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState("");
    const [address, setAddress] = useState("");

    const params = useParams();

    useEffect(() => {
        getproductDetails();
    }, []);

    const getproductDetails = async () => {
        let result = await fetch(`http://localhost:3000/restauranst/${params.id}`);
        result = await result.json();
        console.log(result);
        setName(result.name);
        setEmail(result.email);
        setRating(result.rating);
        setAddress(result.address);
    };

    const update = async (e) => {
        e.preventDefault();

        let result = await fetch(`http://localhost:3000/restauranst/${params.id}`,{
            method: "PUT",
            body: JSON.stringify({ name, email, rating, address}),
            headers:{ "Content-Type": "application/json"},
        });
        result = await result.json();
        console.log(result);
        alert("Restaurant has been Edit")
    }
  return (
    <div align="center">
      <h1>Restaurant Update</h1>
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
          onClick={update} 
          type="submit" >
              Edit Restaurant
          </button>
      </form>
    </div>
  )
}

export default RestaurantUpdate;