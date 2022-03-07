import React, { useEffect, useState } from "react";
import Axios from "axios";

const PostApi = () => {
    const [data, setDate] = useState([]);

    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setDate(response.data)
            })
            .catch()
    })
    const clickHandler = (ele) => {
        return <>
            <h6>{ele}</h6>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header"></div>
                            <div className="card-body">
                                <h5>name: {ele.name}</h5>
                                <h1>React PostApi using useEffect, useState</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
    return (
        <>
            <pre>{JSON.stringify(data)}</pre>
            <h1>Hello Check</h1>
            <div className="container">
                <div className="row">
                    <div className="col">

                    </div>
                </div>
            </div>
            {clickHandler}
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((ele) => {
                        const { id, name, email, address } = ele;
                        return <tr key={id} onClick={clickHandler.bind(this, ele)} >
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{address.city}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    );
};
export default PostApi;