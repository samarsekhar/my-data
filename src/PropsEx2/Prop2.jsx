import React from "react";

function Prop2(props) {
    return (
        <div>
            <h1>Component B</h1>
            <pre>{JSON.stringify(props)}</pre>
            <h3>property 1:{props.exp1}</h3>
            <h3>property 2:{props.exp2}</h3>
            <h3>property 3:{props.exp3}</h3>
        </div>
    )
}
export default Prop2;