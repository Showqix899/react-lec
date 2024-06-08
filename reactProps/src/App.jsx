import { useState } from 'react'
import Cmpn from './components/Cmpn'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello world</h1>
        <div>
          <Cmpn id={1144} name={"Showqi"}/>
          <Cmpn id={1145} name={"Asraf"}/>


        </div>
      </div>
      
    </>
  )
}

export default App
