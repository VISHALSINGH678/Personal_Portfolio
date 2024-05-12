import React from 'react'
import '../CSS/JavaScriptNotes.css'
import NavBar from './NavBar'
import Footer from './Footer'

export default function ReactJS() {
  return (
      <div className="javascriptdiv">


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


        <h1>ReactJS</h1>
        <p><b>Cooming Soon...</b></p>
        <br />
        <br />
        
      <Footer/>
      </div>
  )
}
