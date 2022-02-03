import React from "react";
import CompY from "./CompY";
function CompX() {
    let x = 1000
    let y = 2000
    let z = 3000

    return <div>
        <h1>Component X</h1> <hr />
        <CompY prop1={x} prop2={y} prop3={z} />
    </div>
}
export default CompX;