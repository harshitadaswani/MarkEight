import React, {useState} from "react";
import "./styles.css";

export default function App() {

  var [input, setInput] = useState("");
    
    function inputHandler(e) {
      //console.log(e.target.value);
      setInput(e.target.value);
    }

  return (
    <div className="App">
    <h1>Enter your name: </h1>
    <input onChange= {inputHandler} type = "text" />
    <h3> Text entered will appear here: </h3>
    <div>{input} </div>
    </div>
  );
}
