import React from "react";
import "./App.css";
import FormContainer from "./Components/FormContainer";
import Input from "./Components/Input";
import UserName from "./Components/UserName";
import NewPassword from "./Pages/NewPassword";

function App() {
  return (
    <div className="App">
      <UserName username={"Olga_Grishchenko"}/>

    </div>
  );
}

export default App;