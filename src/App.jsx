import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Portfolio from './pages/Portfolio.jsx'
import ContactMe from './pages/ContactMe.jsx'
import Resume from './pages/Resume.jsx'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<AboutMe />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<ContactMe />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='*' element={<h2>Error 404 - Page Not Found</h2>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
