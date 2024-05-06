import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/JSX/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/JSX/About';
import Contact from './components/JSX/Contact';
import Projects from './components/JSX/Projects';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
