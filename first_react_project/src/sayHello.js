import React from "react";

function Hello() {
  const btn = "try me";

  const sayHello = () => {
    console.log("hello");
  };

  return (
    <div>
      <h1> Hello React</h1>
      <button onClick={sayHello}>{btn}</button>
    </div>
  );
}

export default Hello;
