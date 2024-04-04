import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter]=useState(0);
  let count=()=>{
    setCounter(counter+1);
  }
  let decrease=()=>{
    if(counter==0){
      alert("value can not be reduced");
    }
    else{
      setCounter(counter-1)
    }
    
  }

  return (
    <>
      <h1>hello world</h1>
      <h2>Conter Value : {counter}</h2>
      <br />
      <button onClick={count}>ADD value</button>
      <br />
      <button onClick={decrease}>Remove Value</button>
    </>
  )
}

export default App
