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
        <a href='/Notes'><button className='btn1'>JavaScript</button></a>
        </li>


           <li>
        <a href='/jquery'><button className='btn1'>JQuery</button></a>
        </li>


           <li>
        <a href='/nodejs'><button className='btn1'>NodeJS</button></a>
        </li>


           <li>
        <a href='/express'><button className='btn1'>ExpressJS</button></a>
        </li>


           <li>
        <a href='/reactjs'><button className='btn1'>ReactJS</button></a>
        </li>
        </ul>
        </nav>
      </div>
<hr />
      <JavaScriptNotes/>
      <Footer/>
    </div>
  )
}
