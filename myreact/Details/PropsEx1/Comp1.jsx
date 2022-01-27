import React from "react";
import Comp2 from "./Comp2";

function Comp1() {
    let name = "Samar"
    let age = 22
    let qualification = "B tech"
    let image = "https://avatars.githubusercontent.com/u/96787965?v=4"

    return <div>
        <h1>My Details</h1>
        <Comp2 name={name}
            age={age}
            qualification={qualification}
            image={image}
        />
    </div>
}
export default Comp1;