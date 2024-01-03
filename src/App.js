// App.js
import React from "react";
// import "./App.css";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <main className="app">
      <Sidebar />
      <Main/>
    </main>
  );
};

export default App;
