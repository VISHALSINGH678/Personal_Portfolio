import React from 'react'
import '../CSS/Contact.css'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Contact() {
  return (
    <div>
        <NavBar/>
      <div className="divC1">
        <h1 className="h1C1">Contact Me</h1>
        <div className="divC2">
            <h3>Insert Your Name</h3>
        <input type="text" placeholder='' className="inputC1" />
            <h3>Enter Email</h3>
        <input type="email" placeholder='' className="inputC2" />
            <h3>Write here for contact me</h3>
        <input type="text" placeholder='' className="inputC3" />
        <button type='submit' className="btnC1">Submit</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
