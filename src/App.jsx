import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Technologies from './components/Technologies'
import Capabilities from './components/Capabilities'
import Projects from './components/projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <main>
                <Hero />
                <Stats />
                <About />
                <Technologies />
                <Capabilities />
                <Projects />
                <Contact />
              </main>
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
