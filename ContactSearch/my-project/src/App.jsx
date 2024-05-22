import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from '../data'
function App() {
const [search,setSearch]=useState('');
console.log(search);


  return (
    <>
      <div className='h-screen flex justify-center w-auto'>
      
        <div className='block w-1/2'>
        <h1 className='text-3xl font-bold mt-3'>Contact Keeper</h1>
        <form>
        <input className='w-full h-10 mt-6 boder border-slate-950 p-3 bg-white-300 shadow-lg rounded-lg bg-gray-100 focus:outline-none' type="text" placeholder='Search Here'
        onChange={(e)=>(setSearch(e.target.value))}/>
        </form>
        <table className='table-fixed w-full border border-gray-800 mt-6'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {
              data.filter((item)=>{
                return search.toLocaleLowerCase()===''? item
                : item.first_name.toLocaleLowerCase().includes(search);
              }).map((item)=>(
              <tr key={item.phone}>
              <td value={item.first_name}>{item.first_name}</td>
              <td value={item.last_name}>{item.last_name}</td>
              <td vlaue={item.email}>{item.email}</td>
              <td vlaue={item.phone}>{item.phone}</td>
            </tr>
              ))
              }
          </tbody>
        </table>
        </div>
      </div>
    </>
  )
}

export default App
