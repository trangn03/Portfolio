import './App.css'
import NavBar from './sections/NavBar/NavBar'
import About from './sections/About/About'
import Projects from './sections/Projects/Projects'
import Experiences from './sections/Experience/Experiences'
import Footer from './sections/Footer/Footer'
import Skills from './sections/Skills/Skills'

function App() {
  return (
    <>
      <NavBar />
      <About />
      <Experiences />
      {/* <Skills /> */}
      <Projects />  
      <Footer />
    </>
  )
}

export default App
