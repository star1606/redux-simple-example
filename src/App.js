import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Count from "./components/Count";
// Redux & Redux-Thunk test

function App() {
  return (
    <div>
      <Count />
    </div>
  );
}

export default App;
