import React, {Component} from "react";
import UseEffect2 from "./Hooks_useEffect/UseEffect2";
import UseEffectCleanup from "./Hooks_useEffect/UseEffectCleanup";
//import UseEffect1 from "./Hooks_useEffect/UseEffect1";

//import UseEffect from "./Hooks_useEffect/UseEffect";

class App extends Component {
  render() {
    return(
      <div>
        {/* <UseEffect /> 
        <UseEffect1 />  */}
        <UseEffect2 />
        <UseEffectCleanup />
      </div>
    )
  }
}
export default App;