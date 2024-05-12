import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/JSX/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/JSX/About';
import Contact from './components/JSX/Contact';
import Projects from './components/JSX/Projects';
import Notes from './components/JSX/Notes';
import Jquery from './components/JSX/Jquery';
import NodeJS from './components/JSX/NodeJS';
import Express from './components/JSX/Express';
import ReactJS from './components/JSX/ReactJS';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/notes" element={<Notes/>}></Route>
      <Route path="/jquery" element={<Jquery/>}></Route>
      <Route path="/nodejs" element={<NodeJS/>}></Route>
      <Route path="/express" element={<Express/>}></Route>
      <Route path="/reactjs" element={<ReactJS/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
