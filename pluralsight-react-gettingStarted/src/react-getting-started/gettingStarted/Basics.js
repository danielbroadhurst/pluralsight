import React, { useState } from "react";

// The Basics => Hook

function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return <button onClick={handleClick}>+{props.increment} </button>;
}

function Display(props) {
  return <div> {props.message} </div>;
}

function BasicApp() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incVal) => setCounter(counter + incVal);
  return (
    <div>
      <Button onClickFunction={incrementCounter} increment={5} />{" "}
      <Button onClickFunction={incrementCounter} increment={10} />{" "}
      <Display message={counter} />{" "}
    </div>
  );
}

export default BasicApp;