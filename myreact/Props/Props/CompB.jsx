import React from "react";
let CompB = (props) => {

    return (
        <div>
            <pre>{JSON.stringify(props)}</pre>
            <h1>player name:{props.player_name}</h1>
        </div>
    )
}
export default CompB;