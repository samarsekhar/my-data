import React from "react";
import "./App.css"
import Classtimer from "./Hooks_useRef/UseRef2/Classtimer";
import Hooktimer from "./Hooks_useRef/UseRef2/Hooktimer";
import Login from "./Hooks_useRef/UseRef2/Login";


const App = () => {
    return(
        <div>
         <Login />
         <Hooktimer />
         <Classtimer />
        </div>
    )
};
export default App;