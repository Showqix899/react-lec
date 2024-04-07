import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './compnents/card'

function App() {
  const [count, setCount] = useState(0);
  let myObj={
    name:"Susan Timson",
    age:23,
  }

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-2 mb-2'>Tailwind Test</h1>
      <Card username="ALis" btnText="click me"/>
      <Card username="Guwen" btnText="visit me"/>
    </>
  )
}

export default App
