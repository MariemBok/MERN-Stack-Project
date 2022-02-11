import React from "react";
import Tweet from "./Tweet";
import Clock from "./Clock";
import styled from "styled-components";
import "./App.css";

function App() {
  const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
  const Mariem = styled.p`
  color: violet;  
  `;
  return (
    <div className="app">
      <Title>This is the title</Title>
      <Mariem>Mariem, eh?</Mariem>
      <Tweet name="Mariem"/>
      <Tweet name="Ali"/>
      <Tweet name="Mohssen"/>
      <Tweet name="Michael"/>
      <Tweet name="Oussema"/>
    </div>
  );
}

export default App;
