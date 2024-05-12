import React, { useEffect, useRef } from 'react'
import '../CSS/Home.css'
import NavBar from './NavBar'
import Footer from './Footer'
import Cards from './Cards'

export default function Home() {
    const el = useRef(null)

    useEffect(()=>{
    const typed = new Typed('#element', {
        strings: ['Front-End Developer', 'Full Stack Developer', 'MERN Stack Developer'],
        typeSpeed: 50,
    })
    return()=>{
        typed.destroy()
    }
},[])

  return (
    <>
    <NavBar/>

    <main>
        <section className="firstSection">
            <div className="leftSection">
                <div>Hi, My name is<span className="purple">Vishal</span></div>
                <div>and I am a passionate</div>
                <span ref={el} id="element"></span>
                <div className="buttons">
                    <a href="Vishal_CV.pdf">
                    <button href="Vishal_CV.pdf" className="btn">Download Resume</button>
                    </a>
                    <a  href="https://github.com/VISHALSINGH678" >
                    <button className="btn">Visit Github</button>
                    </a>
                </div>
            </div>
            <div className="rightSection">
                <img src="1.png" alt="img"/>
            </div>
        </section>

        <hr/>
        <section className="secondSection">
            <span className="text-gray">What I have done so far</span>
            <h1>Training Courses</h1>

            <div className="box">
                <Cards/>
            </div>
        </section>
    </main>
<br />
    <Footer/>
    </>
  )
}
