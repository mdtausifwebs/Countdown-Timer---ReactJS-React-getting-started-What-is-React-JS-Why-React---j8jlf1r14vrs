import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {

  const [getTime,setTime]=useState(0);
  let result='';
  // write your code here 

  useEffect(()=>{
    if(getTime!=0){
      result = setTimeout(()=>{
        setTime(getTime-1);
      },1000)
    }

   
  },[getTime])

  const onKeyboardEnter=(event)=>{
      if(event.keyCode === 13){
        let input = document.getElementById("timeCount").value;
        console.log(input!=0);
        if(!isNaN(input) && input!=0){
          console.log(input);
          setTime(parseInt(input));
        }
        else{
          setTime(0);
          if(result!="")[
            clearTimeout(result)
          ]
        }
      } 
  }

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={onKeyboardEnter} /> sec.
        </h1>
      </div>
      <div id="current-time">{getTime}</div>
    </div>
  )
}


export default App;


// import React, { Component, useState, useEffect } from "react";
// import "../styles/App.css";

// const App = () => {
//   const [inputTimer, setinputTimer] = useState(null);
//   const [intern, Setintern] = useState(null);
//   const onkeydownss = () => {
//     Setintern(null);
//     if (inputTimer != null) {
//       let ineterns = setInterval(() => {
//         setinputTimer((pre) => pre - 1);
//         console.log(inputTimer);
//       }, 1000);
//       Setintern(ineterns);
//     }
//   };
//   return (
//     <div className="wrapper">
//       <div id="whole-center">
//         <h1>
//           Reverse countdown for
//           <input
//             id="timeCount"
//             keyDown={inputTimer ? onkeydownss : clearInterval(intern)}
//             onChange={(e) => setinputTimer(e.target.value)}
//           />{" "}
//           sec.
//         </h1>
//       </div>
//       <div id="current-time">{inputTimer && inputTimer}</div>
//     </div>
//   );
// };

// export default App;
