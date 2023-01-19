import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Increment from './Increment';

function App() {
  // const [second,setSecond]=useState(0);
  // const [minuts,setMinuts]=useState(0);
  // const [hour,setHour]=useState("00");
  // const [startTimer,setStartTimer]=useState(false);

  
  // const StartTimer=()=>{
  //     setStartTimer(true)
  // }

  // let t;
  // useEffect(()=>{
  //   if(startTimer==true){
  //     t=setInterval(()=>{
  //       setSecond(second+1);
  //       if(second==59){
  //         setMinuts(minuts+1)
  //         setSecond(0);
  //       }
  //     },1000)
  //   }
  //   return ()=>clearInterval(t);
  // });

  return (
    <div className="App">
      {/* <h1>Timer</h1>
      <div>
        <span>{hour}</span>:
        <span>{minuts<10?"0"+minuts:minuts}</span>:
        <span>{second<10?"0"+second:second}</span>
      </div>
      <button onClick={StartTimer}>Start</button> */}
      <HOCred comp={Increment} />
    </div>
  );

  function HOCred(props){
    return <h2><props.comp /></h2>
  }
}

export default App;
