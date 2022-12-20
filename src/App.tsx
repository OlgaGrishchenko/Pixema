import React from "react";
import "./App.css";
import Button, { ButtonTypes } from "./Components/Button";
import ButtonGroup from "./Components/ButtonGroup";
import Input from "./Components/Input";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">


      <Input
                  title={"Title"}
                  value={""}
                  onChange={ (value: string) => (queueMicrotask) }
                  placeholder={"Your email"}
              />
      
      <Search value={""} disabled={false} filters={false} />

        <ButtonGroup />
    </div>
  );
}

export default App;