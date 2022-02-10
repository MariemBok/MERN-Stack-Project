import React, {useState} from "react";

function Tweet({name}){
    const [count, countSet]= useState(0);
    const Increment = () =>{
        countSet(count + 1);
    }

    return(
        <div className="tweet">
            <h2>{name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis alias provident dolores?</p>
            <h3>well, well, well.</h3>
            <button onClick={Increment}>Increment</button>
            <h3>{count}</h3>
        </div>
    );
}

export default Tweet;