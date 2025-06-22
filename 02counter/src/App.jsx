import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15) //use to change the state mean used to propaget the changes in the UI,instead of 15 any default value can be use we can give true,false,'',{},[]

  //let counter=15
  const addval= ()=>{
    //counter=counter+1
    if(counter<20){

      setCounter(counter+1)
    }
  }

  const removeval= ()=>{
   // counter=counter-1
    if(counter>0){

      setCounter(counter-1)
    } 
  }
  return (
    <>
      <h1>COUNTER</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addval}>Increase</button>
      <br></br>
      <button onClick={removeval}>Decrease</button>
    </>
  )
}

export default App
