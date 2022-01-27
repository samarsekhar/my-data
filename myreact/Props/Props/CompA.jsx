import React from "react";
import CompB from "./CompB";

let CompA = () => {
    let Name = "Rohit"

    return <div>
        <h1>Example 1</h1>
        <CompB player_name={Name} />
    </div>
}
export default CompA;