import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="mainContent">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
