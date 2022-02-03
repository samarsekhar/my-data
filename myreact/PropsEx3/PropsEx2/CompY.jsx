import React from "react";

function CompY(props) {
    return (
        <div>
            <h2>Component Y</h2>
            <pre>{JSON.stringify(props)}</pre>
            <h5>Property 1 : {props.prop1}</h5>
            <h5>Property 2 : {props.prop2}</h5>
            <h5>Property 3 : {props.prop3}</h5>
        </div>
    );
};
export default CompY;