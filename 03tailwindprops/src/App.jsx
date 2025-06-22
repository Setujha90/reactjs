//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Card from './component/Card'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  //  let myObj = {
  //   username: "hitesh",     //we can also pass object or array as an input in the card like someobj={myObj}
  //   age: 21
  // }
  // let newArr = [1, 2, 3]

  return (
    <>
     <h1 className="text-yellow-500 bg-green-400" >Hello</h1>
       <Card username="Sita" btnText="visit me" />
       <Card username="Gita" btnText="click me"/>
    </>
  )
}

export default App
