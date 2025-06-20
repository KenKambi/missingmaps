import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Involved from '../pages/involved/Involved'
import About from '../pages/about/About'

function App() {

  return (
    <>
      <Navbar/>
    <About/>
      <Footer/>
    </>
  )
}

export default App
