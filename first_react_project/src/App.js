import React, {useState} from "react";
import styled from "styled-components";
import Product from "./Components/Product";
import Products from "./products.json";
import "./App.css";
import Countdown from "./Components/CountDown";

function App() {
  /*const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
  const Mariem = styled.p`
  color: violet;  
  margin: 20px;
  `;*/


  
  const AppFrame = styled.div`
  text-align: center;
  display: flex;
`;
  return (
    <AppFrame className="app">   
      <Product name="product 1"/>
      <Countdown/>
    </AppFrame>
   
  );
}

export default App;
