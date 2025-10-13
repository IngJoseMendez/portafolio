import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/projects'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-8xl'>
      <Header />
      <Hero />
      <Projects />
      <Footer />
      
    </div>
  )
}

export default App
