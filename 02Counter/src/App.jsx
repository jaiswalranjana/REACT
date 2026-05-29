import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

let [counter,setCounter]=useState(0);
  // let counter=15;


  const addValue=()=>{
    if(counter<20){
        // setCounter(counter+1);
        //  setCounter(counter+1);
        //   setCounter(counter+1);
        //    setCounter(counter+1);

        setCounter(prevCounter=>prevCounter+1)
         setCounter(prevCounter=>prevCounter+1)
          setCounter(prevCounter=>prevCounter+1)
           setCounter(prevCounter=>prevCounter+1)

    } else{
      alert("value cant be above 20");
    }
    // console.log("clicked", counter);
      // counter=counter+1;
    
  }

  const removeValue=()=>{
    console.log("clicked",counter);
    if(counter>0){
    setCounter(counter-1);
    } else{
      alert("value cant be less than 0 ");
    }
   
    
  }
  return (
    <>
      <h1>heyyy</h1>
      <h2>counter value :{counter}
      </h2>
      <button
      onClick={addValue}
      >add value  {counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >remove value {counter}</button>
    </>
  )
}

export default App
