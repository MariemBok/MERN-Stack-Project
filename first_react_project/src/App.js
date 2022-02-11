import React from "react";
import Tweet from "./Tweet";
import Clock from "./Clock";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Clock/>
      <Tweet name="Mariem"/>
      <Tweet name="Ali"/>
      <Tweet name="Mohssen"/>
      <Tweet name="Michael"/>
      <Tweet name="Oussema"/>
    </div>
  );
}

export default App;
