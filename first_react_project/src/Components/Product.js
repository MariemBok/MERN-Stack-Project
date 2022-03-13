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
    
    const firstName = useFormInput('Mariem');
    const lastName = useFormInput('Bokri');
    useDocumentTitle(firstName.value + ' ' + lastName.value);
    const width = useWindowWidth();
    const [count, setCount] = useState(0);
    var num = count;

  
    return (
        <ProductFrame>
           
         <h1>{props.name}</h1>
         <input {...firstName} > 
         </input>   
         <input {...lastName} > 
         </input>   
         <h1> Window width: {width}</h1>
         <button onClick={() => setCount(count + 1)}>Click me ! </button>
         <h2> test:  {num} </h2>
            
        </ProductFrame>
    );
}

export default Product;

function useFormInput(intialValue){

  const [value, setValue] = useState(intialValue);
  function handleValueChange(e){
    setValue( e.target.value );
  }

  return{
    value,
    onChange : handleValueChange
  };

}

function useDocumentTitle(title){
  useEffect (() => {
    document.title = title ;
  });
}

function useWindowWidth (){

  const [width, setWidth] = useState(window.innerWidth);
  useEffect (() =>{
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize',handleResize);
    return () => {
      window.removeEventListener('resize',handleResize);
    }
  });

  return width;

}