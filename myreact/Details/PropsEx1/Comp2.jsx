import React from "react";

function Comp2(props) {

    return <div>
        <pre>{JSON.stringify(props)}</pre>
        <h1>name:{props.name}</h1>
        <h1>age:{props.age}</h1>
        <h1>qualification:{props.qualification}</h1>
        <img src={props.image} alt="" />
    </div>
}
export default Comp2;