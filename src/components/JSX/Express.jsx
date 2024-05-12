import React from 'react'
import '../CSS/JavaScriptNotes.css'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Express() {
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

        <h1>ExpressJS</h1>
        <p><b>1. Introduction to ExpressJS ?</b><br />
        Express is a minimal and flexible Node.js web application framework that provides a roubust set of features for web and mobile application.
        <br />
        <br />
        <li>cross-platform</li>
        <li>build single, multiple and hybrid web and mobile applications.</li>
        <br />
        <br />
        <b>First Program with ExpressJS</b>
        <br />
        <br />
        <br />
        <b>2. Routing in ExpressJS ?</b> <br />
        Routing refers to determining how an application responds to a client request to a particular endpoints, <br />
        Which is a URL( or Path ) and a specific HTTP request method (GET, POST, and so on.)
        <br />
        <br />
        <b>Respond with Hello World! on the homepage:</b>
        <br />
        <br />
        <b>Respond to POST request:</b>
        <br />
        <br /><b>Respond to PUT request to the /user route:</b>
        <br />
        <br /><b>Respond to  DELETE request:</b>
        <br />
        <br />
        <b>3. Serving static Files</b><br />
        To serve static files such as img, css files, and js files, use the <b>express.static</b> built-in middleware function in ExpressJS. <br /><br />
        Function signature is: <br /> <b>"express.static (root, [options])"</b>
        <br />
        <br />
        Web application is store all static files under the 'Public' directory in root of a Project. <br />
        <b>"app.use(express.static('public'))"</b><br /><br />
        Now. you can load the files that are in the Public directory:
        <br />
        <br />
        <li>To use multiple static assets directories, call the <b>express.static</b> middleware function multiple times:</li>
        <br />
        <br />
        <br />
        <b>4. Virtual Path Prefix</b><br />
        To create a virtual path prefix for fils that served by the express.static function, <b>Specify a mount path</b> for the static directory. <br /><br />
        "app.use('/static', express.static('Public'))"
        <br />
        <br />
        Try to load.
        <br />
        <br />
        use the absolute path of the directory that you want to server:
        <br />
        <br />
        <br />
        <b>5. BodyParser</b> <br />
        It allows developers to process incoming data, such as body payload. The payload is just the data, we are receiving from the client to be processed on. <br /><br />
        Most useful with POST methods. <br />
        <b>npm install body-parser</b>
        <br />
        <br />
        <br />
        <b>6. CookieParser</b> <br />
        It Passes cookie header and populate <b>req.cookies</b> with an obj keyed by cookie names.
        <br />
        <b>"npm install cookie-parser"</b>
        <br />
        <br />
        <b>Usage:</b><br />
        const cookieParser = require('cookie-parser');<br />
        app.use(cookieParser());
        <br />
        <br />
        <br />
        <b>7. Session</b><br />
        The middleware function creates a session middleware with given options.
        <br />
        A session is often used in applications such as login/ sign up. <br />
            <b>"npm install session"</b>
            <br />
            <br />
            <b>Usage:</b>
        <br />
        <br />
        <br />
        <b>8. Database Connectivity with MongoDB</b><br />
        "var fs = require('fs')" <br />
        Read File, Create, Update, Delete, Rename
        <br /> <br />
        <b>Database Connectivity with MySQL</b>
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
