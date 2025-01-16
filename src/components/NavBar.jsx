import React from 'react'
import axios from "axios"
function NavBar() {


  return (
    <>
      <div className="navbar bg-base-100 shadow-sm flex justify-between">
        <a className="btn btn-ghost text-xl">daisyUI</a>
        <a href="/">home</a>
        <a href='/already-read'>Already read</a>
        <a href='/want-to-read'>Want to read</a>
        <a href='/search'>search</a>

    </div>
    </>
  )
}

export default NavBar
