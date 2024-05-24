import { useState,createContext } from 'react'

import ChildA from './components/childA'
const UserContex= createContext()


function App() {
  const [user, setUser] = useState("Meow");

  return (
    <>
    <UserContex.Provider value={user}>
    <h1>Child Componets</h1>
    <ChildA/>
    </UserContex.Provider>
    </>
  )
}

export default App
export {UserContex}
