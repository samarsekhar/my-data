import React from "react";
import Prop2 from "./Prop2"

function Prop1() {
    let a = 100
    let b = 200
    let c = 300

    return <div>
        <h1>Component A</h1>
        <Prop2 exp1={a}
            exp2={b}
            exp3={c}
        />
    </div>
}
export default Prop1;