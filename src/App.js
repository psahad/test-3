import React from "react";
import Aside from "./components/aside/Aside";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Aside className="App" as="Aside" />
      <Main />
    </div>
  );
}

export default App;
