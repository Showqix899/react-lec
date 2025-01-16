import { useState } from 'react'
import Books from './components/Books'
import Currently_reading from './components/Currently_reading'
import NavBar from './components/NavBar'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'




function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <Router>
    <NavBar/>
      <div className='w-full min-h-screen flex'>
        <div className='sidebar w-[30%] h-full bg-white'>
          sajfdklasjlfdjaslkjdflkajsfljalksdjf
        </div>
        <div className='main-part w-[70%] h-full bg-gray-400'>
          <Routes>
            <Route path ="home" element={<Home/>}/>
            <Route path ="want-to-read" element={<Currently_reading/>}/>
            <Route path ="already-read" element={<Books/>}/>
            <Route path ="search" element={<SearchBar/>}/>
          </Routes>
        
        </div>
      </div>
    <Footer/>
    </Router>
   </>
  )
}

export default App
