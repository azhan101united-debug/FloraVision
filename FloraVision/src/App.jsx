import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar'
import Cart from './Components/cart'
import Hero from './Components/Hero'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#1B2316]'>
      
      <div className='bg-[url(./assets/Background1.jpg)] bg-cover bg-center bg-no-repeat'>
        <Navbar />
        <Hero />
        <Cart/>
        
      </div>
      <Footer/>
    </div>
  )
}

export default App
