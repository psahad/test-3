import React from "react";
import Aside from "./components/aside/Aside";
import Main from "./components/Main";


import { MenuStore } from "./store/Menu";

function App() {

  const menuState  = MenuStore.useState(s => s)
  return (
    <div className="App">
      <Aside className="App" as="Aside" />
      <Main />
    </div>
  );
}

export default App;
