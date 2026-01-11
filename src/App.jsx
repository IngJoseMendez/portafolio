import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/projects'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='max-w-8xl mx-auto min-h-screen bg-gray-900 overflow-x-hidden'>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Projects />
              <Footer />
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
