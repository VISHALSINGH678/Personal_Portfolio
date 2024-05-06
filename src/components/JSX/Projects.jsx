import React from 'react'
import '../CSS/Projects.css'
import NavBar from './NavBar'
import Footer from './Footer'
import GithubCards from './GithubCards'
import LocalHostCards from './LocalHostCards'
import ProcessCards from './ProcessCards'
import LiveProjects from './LiveProjects'

export default function Projects() {
  return (
    <div>
        <NavBar/>
            <h1>PROJECTS</h1>
            <div>
                <h2>Live Projects:</h2>
            <div className="divP">
                <LiveProjects/>
            </div>
            </div>
        <div>
            <h2>Host on GitHUB:</h2>
            <div className="divP1">
      <GithubCards/>
            </div>
        </div>

        
        <div className="divP2">
            <h2>Host on LocalHost:</h2>
            <div className="divP3">
                <LocalHostCards/>
            </div>
        </div>

        <div className="divP4">
            <h2>Project Under Process:</h2>
            <div className="divP5">
                <ProcessCards/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
