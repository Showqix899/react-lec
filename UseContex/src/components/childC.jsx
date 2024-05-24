import React ,{useContext}from 'react'
import { UserContex } from '../App'
function ChildC() {
const user = useContext(UserContex)

  return (
    <div>
      i am child C {`i am also ${user} `}
      
    </div>


  )
}

export default ChildC
