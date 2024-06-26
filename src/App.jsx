import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Sociallinls from './Components/Sociallinls'
import Portfolio from './Components/Portfolio'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      
      <Sociallinls/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </div>

  )
}

export default App
