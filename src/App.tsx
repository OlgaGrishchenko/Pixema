import React from "react";
import "./App.css";
import Button, { ButtonTypes } from "./Components/Button";
import Footer from "./Components/Footer";
import Input from "./Components/Input";

function App() {
  return (
    <div className="App">
      <Button title={"Primary"} type={ButtonTypes.Primary}/>
      <Button title={"Secondary"} type={ButtonTypes.Secondary}/>
      <Input
                  title={"Title"}
                  value={""}
                  onChange={ (value: string) => (queueMicrotask) }
                  placeholder={"Your email"}
              />
      <Footer />
    </div>
  );
}

export default App;