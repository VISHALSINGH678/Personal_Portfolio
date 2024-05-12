import React from 'react'
import '../CSS/JavaScriptNotes.css'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Jquery() {
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



        <h1>Jquery</h1>
        <p><b>1. What is JQuery?</b> <br />
        jQuery is a fast, small and feature-rich JavaScript library. <br />
        jQuery has changed the way that write JavaScript. <br />
        <br />
        <br />
        <br />
        <b>2. The HTML Document is ready Afterwords we add on jquery therfore we will use document.ready method.</b> <br />
        <br />
        <br />
        <br />
        <b>3. Events</b> <br /> <br />
        <li><b>Mouse Event</b></li>
        Double-click--
        <br />
        Mouse-Enter--
        <br />
        <br />
        <li><b>Keyboard Event</b></li>
        <br />
        <br />
        <br />
        <b>4. Types of selectors in JQuery?</b> <br />
        there are three main types:
        <li><b>Element selectors -- </b> ('p').click();</li>
        <li><b>Id selectors -- </b>('#id1').click();</li>
        <li><b>Class selectors -- </b>('.class1').click();</li> <br />
        <b>Other selectors:</b><br />
        ('*').click() //click on all the elements.
        ('p.odd').click() //click on all odd elements of p.
        ('p.first').click() //click on all first elements of p.
        <br />
        <br />
        <br />
        <b>5. Demoing the on method.</b>
        <br />
        <br />
        <b>Other:</b>
        <br />
        <br />
        <br />
        <b>6. FadeOut()</b>
        <br />
        <br />
        <br />
        <b>7. Sliding? </b><br />
        <br />
        slide method - speed and callback parameters are optional.
        <br />
        <br />
        <br />
        <b>8. Animations? </b>
        <br />
        <br />
        <b>Example:</b>
        <br />
        <br />
        <br />
        <b>9. Oueue-- Done in line-by-line</b>
        <br />
        <br />
        <br />
        </p>
        <p>
            <b>10. CSS with jQuery?</b>
            <br />
            <br />
            <br />
            <b>11. Ajax using JQuery?</b><br />
            (AJAX) Asynchronous JavaScript and XML. <br />
            <br />
            Ajax is about loading data in the background and display it on the webpage, without reloading the whole page.
            <br />
            <br />
            <b>Examples--</b><br />
            Gmail, Google Maps, Youtube & Facebook tabs.
            <br />
            <br />
            <b>get () function in Ajax:</b>
            <br />
            <br />
            <b>post () function in Ajax:</b>
            <br />
            <br />
            <br />
        </p>
        <br />
        <br />
        
      <Footer/>
      </div>
  )
}
