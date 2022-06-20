import React, { useState } from 'react';
import axios from 'axios';


function Home() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [third, setThird] = useState("");
    const [fourth, setFourth] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'appliction/json'},
            body: JSON.stringify({ title: 'React POST Request'})
        };
        console.log(first, second, third, fourth);

        // const response = fetch(`https://hoblist.com/api/movieList?category=${first}&language=${second}&genre=${third}&sort=${fourth}`, requestOptions);
        // const data = response.json()
        // console.log(data);
        // this.setState({postId: data.id})
        

        alert("OOPS! couldn't Find Anything")

        try{
            axios.post(`https://hoblist.com/api/movieList?category=${first}&language=${second}&genre=${third}&sort=${fourth}`)
                 .then((response) => {
                 console.log(response)});
        }
        catch(e) {
            alert("OOPS! Error occured")
            console.log(e);
        }
    }
  return (
    <div>
      <h1>Enter the Film Details</h1>
      <form onSubmit={submitHandler}>
        <div className='form-group'>
            <label>Category</label>
            <input type='text' className='form-control' placeholder='eg. movies, etc' 
                   onChange={(e) => setFirst(e.target.value)} />
        </div>
        <div className='form-group'>
            <label>Language</label>
            <input type='text' className="form-control" placeholder='eg.kannada, etc'
                   onChange={(e) => setSecond(e.target.value)} />
        </div>
        <div className='form-group'>
            <label>Genre</label>
            <input type='text' className='form-control' placeholder='eg. all'
                   onChange={(e) => setThird(e.target.value)} />
        </div>
        <div className='form-group'>
            <label>Sort</label>
            <input type='text' className='form-control' placeholder='eg. voting'
                   onChange={(e) => setFourth(e.target.value)} />
        </div> <br />
        <button type='submit' className='btn btn-dark btn-lg btn-block'>
            Post Request
        </button>
      </form>
    </div>
  )
}

export default Home;
