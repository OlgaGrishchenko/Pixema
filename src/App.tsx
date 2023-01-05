import React, { useState } from "react";
import Router from "./Pages/Router";
import "./App.css";

import { Theme } from "./Constants/@types";
import { useThemeContext } from "./Context/Theme";
import ThemeProvider from "./Context/Theme/ThemeProvider";

function App() {

  const [theme, setTheme] = useState(Theme.Light);

  const onChangeTheme = () => {
    setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <Router />
    </ThemeProvider>
    </div>
  );
}

export default App;