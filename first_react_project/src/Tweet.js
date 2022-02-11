import React, {useState} from "react";
import styled from "styled-components";

function Tweet({name}){
    const [isRed, redSet] = useState(false);
    const [count, countSet]= useState(0);
    const [danger, dangerSet]= useState(false);
    //var btn_text = 'danger';

    const Increment = () =>{
        countSet(count + 1);
        redSet(true);
    }

    const Init = () =>{
        countSet(0);
        redSet(false);
    }

    const Endanger= () =>{
        dangerSet(!danger);
        console.log(danger);
        //btn_text = 'not danger';
        
    }



    const Btn = styled.button`
    background: ${ props => props.danger? "red" : "green"}
    `;

    return(
        <div className="tweet">
            <h2>{name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis alias provident dolores?</p>
            <h3 className={isRed ? "red" : "blue"}>well, well, well.</h3>
            <button onClick={Endanger}>{danger? "Not Danger" : "Danger"}</button>
            <Btn onClick={Init} danger={danger}>Initialize</Btn>
            <button onClick={Increment} danger>Increment</button>
            <h3>{count}</h3>
        </div>
    );
}

export default Tweet;