import React from "react";
import BasicForm from "./NewForms/BasicForm";
import Form from "./NewForms/Form";
import Multipleinput from "./NewForms/MultipleInput";
import Multipleinputform from "./NewForms/Multipleinputform";


const App = () => {
  return (
    <div>
      <Form />
      <BasicForm />
      <Multipleinput />
      <Multipleinputform />
    </div>
  );
};
export default App;
