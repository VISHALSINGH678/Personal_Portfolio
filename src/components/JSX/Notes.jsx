import React from 'react'
import '../CSS/Notes.css'
import NavBar from './NavBar'
import Footer from './Footer'
import JavaScriptNotes from './JavaScriptNotes'

export default function Notes() {
  return (
    <div>
      <NavBar/>
      <hr />
      <div className='notesnav'>
        <nav>

        <ul>    
      <li>
        <a href='/javascript'><button className='btn1'>JavaScript</button></a>
        </li>


           <li>
        <a href='/javascript'><button className='btn1'>JQuery</button></a>
        </li>


           <li>
        <a href='/javascript'><button className='btn1'>NodeJS</button></a>
        </li>


           <li>
        <a href='/javascript'><button className='btn1'>ExpressJS</button></a>
        </li>


           <li>
        <a href='/javascript'><button className='btn1'>ReactJS</button></a>
        </li>
        </ul>
        </nav>
      </div>

      <JavaScriptNotes/>
      <Footer/>
    </div>
  )
}
