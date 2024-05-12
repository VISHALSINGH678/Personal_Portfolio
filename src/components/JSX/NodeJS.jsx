import React from 'react'
import '../CSS/JavaScriptNotes.css'
import NavBar from './NavBar'
import Footer from './Footer'

export default function NodeJS() {
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



        <h1>NodeJS</h1>
        <p><b>1. Introduction to NodeJS ?</b>
        <li>It's open-source and runtime enviroment for executing JS code. </li>
        <li>Node.js is a library of JS. Which is use to create server connectivity between client side to databases.</li>
        <br />
        <br />
        <b>Advantages--</b>
        <li>easy to learn</li>
        <li>large community support</li>
        <li>reduce loading time using caching.</li>
        <br />
        <br />
        <br />
        <b>2. NodeJS Modules</b> <br />
        Module are set of functions, that you want to include in your applications. <br />
        or these are also a JS library.
        <br />
        <br />
        <b>There are three types:</b>
        <li>Built-in Modules</li>
        <li>Local Modules</li>
        <li>Third-Party Modules</li>
        <br />
        <br />
        <b>1. Built-in Modules--</b>
        <li>http</li>
        <li>fs</li>
        <li>Path</li>
        <li>Url</li>
        <b>Load & use core http Module</b><br />
        "var http = require('http');"
        <br />
        <br />
        <b>2. Local Modules--</b><br />
        Local Modules are modules created locally in your Node.js application, with different functionalities. <br />
        It is use by <b>export</b> keybword.
        <br />
        <br />
        <b>3. Third-Party Modules--</b><br />
        Third-Party Modules are those type of modules which is created by other developers. <br />
        we just use it and manage by <b>NPM</b>. <br /><br />
        "npm install react-router-dom"
        <br />
        <br />
        <br />
        <b>3. NPM</b> <br />
        NPM (Node Package Manager). <br />
        It is use for install and manage modules in node.js.
        <br /> <br />
        <li><b>Locally: </b> " npm install react-bootstrap " </li>
        <li><b>Globally: </b> " npm install-g react-bootstrap " </li>
        <li><b>Updating: </b> " npm update react-bootstrap " </li>
        <br />
        <br />
        <br />
        <b>4. Package</b> <br />
        A package in NodeJS contains all the files you need for a module.
        <br />
        <br />
        <b>Module</b><br />
        Module are set of functions, that you want to include in your applications. <br />
        or these are also a JS library.
        <br />
        <br />
        <br />
        <b>5. Creating Web Server</b><br />

        <br />
        <br />
        <br />
        <b>6. File System</b><br />
        "var fs = require('fs')" <br />
        Read File, Create, Update, Delete, Rename
        <br /> <br />
        <li><b>Read Files: </b></li>
        <br />
        <br /><li><b>Create Files: </b></li>
        <br />
        <br /><li><b>Update Files: </b></li>
        <br />
        <br /><li><b>Delete Files: </b></li>
        <br />
        <br /><li><b>Rename Files: </b></li>
        <br />
        <br />
        <br />
        <b>7. Routing in NodeJS ? </b><br />
        <br />
        Routing defines the way in which the client requests are handled by the application endpoints.
        <br />
        <br />
        <b>There are 2 ways to implement routing in NodeJS:</b>
        <li>By Using Framework</li>
        <li>Without Using Framework</li><br />
        Using the Framework is good to save time.
        <br />
        <br />
        <b>Now create a Server:</b>
        <br />
        <br />
        Now, add the following lines of code in the above function to perform routing:
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
