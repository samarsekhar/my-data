import React, {useState} from 'react'
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const RestaurantSearch = () => {
    const [searchData, setSearchData] = useState("");
    const [lastSearch, setLastSearch] = useState("");

    const searchHandler = async (e) => {
        setLastSearch({lastSearch:e})
        console.log(e.target.value);
        let key = e.target.value;
        let result = await fetch(`http://localhost:3000/restauranst?q=${key}`);
        result = await result.json();
        if(result) {
            setSearchData(result);
            setLastSearch(lastSearch)
        }
    }

    const deleteUser = (id)=> {
        fetch(`http://localhost:3000/restauranst/${id}`,{
            method:"DELETE"
        }).then((result) => {
            result.json().then((res)=> {
                console.log(res);
                setLastSearch(id);
                setLastSearch(lastSearch)

            })
        })
    }
  return (
    <div align="center">
        <div className="conatiner">
            <div className="row">
                <div className="col">
                    <h1>Search Restaurant</h1>
                     {/* <input type="text" onChange={(e)=>search(e.target.value)} /> */}
                     <div>
                         <input className='form-control'
                         aria-label='Small'
                         placeholder='Search Restaurant'
                         type="text"
                         onChange={searchHandler}
                         />
                     </div>
                     <div>
                         {
                             searchData ? (
                                 <table className='table table-hover table-dark'>
                                     <thead className='bg-success'>
                                         <tr>
                                         <th className='bg-warning'>Id</th>
                                         <th className='bg-warning'>Name</th>
                                         <th className='bg-warning'>Email</th>
                                         <th className='bg-warning'>Rating</th>
                                         <th className='bg-warning'>Address</th>
                                         <th className='bg-warning'>Opration</th>
                                         </tr>
                                     </thead>
                                     <tbody>
                                         {
                                             searchData.map((ele)=> {
                                                 return(
                                                     <tr key={ele.id}>
                                                         <td>{ele.id}</td>
                                                         <td>{ele.name}</td>
                                                         <td>{ele.email}</td>
                                                         <td>{ele.rating}</td>
                                                         <td>{ele.address}</td>
                                                         <td>
                                                         <Link cursor='pointer' className='px-5' to={"/update/"+ ele.id}>
                                                             <FontAwesomeIcon icon={faEdit} color="green"/>
                                                         </Link>
                                                         <span className='px-5' onClick={() => deleteUser(ele. id)}>
                                                             <FontAwesomeIcon icon={faTrash} color="red" />
                                                         </span>
                                                         </td>
                                                     </tr>
                                                 );
                                             })
                                         }
                                     </tbody>
                                 </table>
                             ) : null
                         }
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RestaurantSearch;
