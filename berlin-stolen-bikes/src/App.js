import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route excat path="/:id" component={Details}/>
    </div>
  );
}

export default App;
