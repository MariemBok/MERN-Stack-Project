import React, {useState, useEffect} from "react";
import styled from "styled-components";

const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 150px;
  min-width: 150px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;


function Product(props){
    const [namen, setName] = useState('Mariem');
    function changeName(e){
        setName (e.target.value);
    }

    useEffect (() => {
      document.title = namen ;
    });

    return (
        <ProductFrame>
           
         <h1>{props.name}</h1>
         <input  value = {namen} 
            onChange = {changeName}> 
         </input>    
            
        </ProductFrame>
    );
}

export default Product;