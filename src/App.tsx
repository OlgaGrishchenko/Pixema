import React from "react";
import "./App.css";
import FormContainer from "./Components/FormContainer";
import Input from "./Components/Input";

function App() {
  return (
    <div className="App">

      <FormContainer title={"Sign In"}>
      <>
        <Input
                  title={"Title"}
                  value={""}
                  onChange={ (value: string) => (queueMicrotask) }
                  placeholder={"Your email"}
              />
      </>
    </FormContainer>

    </div>
  );
}

export default App;