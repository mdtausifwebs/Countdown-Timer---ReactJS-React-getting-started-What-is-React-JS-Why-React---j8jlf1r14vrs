import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [inputTimer, setinputTimer] = useState(null);
  const [intern, Setintern] = useState(null);
  const onkeydownss = () => {
    Setintern(null);
    if (inputTimer != null) {
      let ineterns = setInterval(() => {
        setinputTimer((pre) => pre - 1);
        console.log(inputTimer);
      }, 1000);
      Setintern(ineterns);
    }
  };
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            keyDown={inputTimer ? onkeydownss : clearInterval(intern)}
            onChange={(e) => setinputTimer(e.target.value)}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{inputTimer && inputTimer}</div>
    </div>
  );
};

export default App;
