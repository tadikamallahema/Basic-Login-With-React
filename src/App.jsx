import { useState } from 'react'
import './App.css'
import Navbar from './Componenets/Navbar'
import {BrowserRouter , Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import Home from './Pages/Home'
import About from './Pages/About'
import Logout from './Pages/Logout'
function App() {

  return (
    <>
     <Routes>
            <Route path='/' element={<Navbar/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/about/:name' element={<About/>}/>
            <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </>
  )
}

export default App
