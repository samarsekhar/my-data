import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'; 
import React, {useState , useEffect} from 'react';
import { Link } from "react-router-dom";

const RestaurantList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    //Api Calling
    const fetchData = () => {
        fetch("http://localhost:3000/restauranst")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setList(data);
        });
    };

    //Deleting from data 
    const deleteUser = (id) => {
        fetch(`http://localhost:3000/restauranst/${id}`, {
            method:"DELETE"
        }).then((result)=> {
            result.json().then((res)=>{
                console.log(res);
                fetchData(id);
            })
        })
    }
  return (
    <div align="center">
      <h1 className='bg-info'>Restaurant List</h1>
      <div>
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
                      list.map((ele) => {
                          return (
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
                          )
                      })
                  }
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default RestaurantList;