import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var user = "Harshita";
  var color = "blue";
  //var username = prompt("Enter your name");
  //var counter =0;
  var [likeCounter, setCounter] = useState(0);

  function likeHandler() {
    console.log("liked!", counter);
    //counter++;
    setCounter(likeCounter);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>Hello {user}!!!</h1>
      {/* <h1 style ={{backgroundColor: "red"}}>Hello {username}!!!</h1> */}
      <button onClick={likeHandler}> Like me! </button>
    </div>
  );
}
