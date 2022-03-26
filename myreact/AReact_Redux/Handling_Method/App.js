import React from "react";
import "./App.css"
import HandlingAlertEx3 from "./Handling_Method/HandlingAlertEx3";
import HandlingEx from "./Handling_Method/HandlingEx";
import HandlingEx2 from "./Handling_Method/HandlingEx2";
//import Login from "./Hooks_useRef/UseRef2/Login";


const App = () => {
    return(
        <div>
        {/* <Login /> */}
        <HandlingEx />
        <HandlingEx2 />
        <HandlingAlertEx3 />
        </div>
    )
};
export default App;