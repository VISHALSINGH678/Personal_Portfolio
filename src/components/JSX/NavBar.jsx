import React from 'react'
import '../CSS/NavBar.css'

export default function NavBar() {
  return (
    <div>
      <header>
        <nav>
            <div className="left">
              <a href="/Notes">Vishal's Portfolio</a>
              </div>
            <div className="right">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact Me</a></li>
                </ul>
            
   </div>     </nav>
    </header>
    </div>
  )
}
