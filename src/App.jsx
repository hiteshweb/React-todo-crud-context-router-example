import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Completed from './pages/Completed';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about-us">About us</Link> | 
        <Link to="/completed">Completed</Link> | 
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/completed" element={<Completed />}></Route>
      </Routes>
    </Router>
  )
}

export default App
