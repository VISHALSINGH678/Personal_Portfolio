import React from 'react'
import '../CSS/JavaScriptNotes.css'

export default function JavaScriptNotes() {
  return (
      <div className="javascriptdiv">
        <h1>JavaScript</h1>
        <p><b>1. var, const, let.</b> <br />
        Variable is a container that stores a value. <br />
        var -- can be change <br />
        const -- cannot be change <br />
        let -- block level variable: <br />
        <br />
        <br />
        <br />
        <b>2. DataTypes in JS?</b> <br />
        Two types-- <br />
        1. Primitive Data Type-- string, number, boolean null undefind.
        <br />
        <br />
        2.Refrence DataType-- array, function, object-----its not create a real copy but it is pass the reference.
        <br />
        <br />
        <br />
        <b>3. Operators?</b> <br />
        Arithemetic, Assignment, Comperison, Logical Operators.
        <br />
        <br />
        <br />
        <b>4. Conditional Statements?</b> <br />
        Execute a block of code based off some condition.
        if, if-else, else-if.
        <br />
        <br />
        <br />
        <b>5. Hoisting?</b> <br />
        Variable & function are hoisted. <br />
        which means there declaration is moved on the top of code.
        <br />
        <br />
        <br />
        <b>6. How to execute JS?</b> <br />
        1. Browser, at console. <br />
        2. Another way, execute js in runtime like Node.js. <br />
        3. 3way, insert scripts tag into HTML Docs.
        <br />
        <br />
        <br />
        <b>7. Loops?</b> <br />
        We use loop to perform repeated actions. <br />
        Types-- for loop, for-in, for-of, while, do-while. <br /> <br />
        for(key in objects) find objects with keys and take action. <br />
        for(variable of iterable) for every itration.
        <br />
        <br />
        <br />
        <b>8.String? </b><br />
        strings are used to store and manipulate text. <br />
        such as: let a = "Tom" <br />
        a.length, a.UpperCase(), a.slice(2,4), a.replace("Tom", "Micheal")
        <br />
        <br />
        <br />
        <b>9. Template Literals? </b><br />
        It is use backtics quotes to define a string. (``)
        <br />
        <br />
        <br />
        <b>10. Arrays?</b> <br />
        Arrays are also a variable. Which can hold more than one value. Mutable -- can be change the array. <br />
        Methods-- pop(), slice(), sort(), push(), reverse(). <br /><br />
        <b>Looping through Array</b> <br />
        forEach loop-- calls a function, once for each array elements. <br />
        map()-- creates a new array by performing some operation on each array elements. ----same as filter.

        <br />
        <br />
        </p>
        <p>
            <b>11. (DOM) Document Object Model</b> <br />
            DOM represents the page content.
            <br />
            <br />
            <b>(BOM) Browser Object Model</b> <br />
            BOM represents additional objects provided by the browser -- (host enviroment) <br />
            Functions -- alert/ prompt/ confirm as also part of BOM.
            <br />
            <br />
            <b>Searching the DOM</b> <br />
            document.getElementById <br />
            document.querySelector <br />
            document.querySelectorAll <br />
            document.getElementByTageName <br />
            document.getElementByClassName <br />
            document.getElementByName <br />
            <br />
            <br />
            <br />
            <b>12. innerHTML</b><br />
            The innerHTML property allows to get the HTML inside element as a string.
            <br />
            <br />
            <b>outerHTML</b><br />
            The outerHTML property contains the full HTML. innerHTML + outerHTML.
            <br />
            <br />
            <br />
            <b>13. Browser Event?</b><br />
            An event is a signal that something has happend.
            <br />
            <br />
            <b>Mouse events:</b> click, right click, mousehover/mouseout, mouse down/up, mouse move.
            <br />
            <b>Keyboard events:</b> keydown/up.
            <br />
            <b>Form element events:</b> Submit, Focus.
            <br />
            <b>Document events:</b> DOMContentLoaded.
            <br />
            <br />
            <br />
            <b>14. Events Handling?</b><br />
            Event handlers can be used to handle and verify user input, actions and browser actions.
            <br />
            <br />
            <b>JS Events:</b><br />
            <li>addEventListener()</li>
            <li>onClick()</li>
            <li>onload()</li>
            <li>onresize()</li>
            <li>onChange()</li>
            <br />
            <br />
            <br />
            <b>15. Asynchronous</b><br />
            that we initiate now and they finish later. <br />
            eg-- setTimeout.
            <br />
            <br />
            <b>Synchronous</b><br />
            that initate and finish one-by-one.
            <br />
            <br />
            <br />
            <b>16. Callback function?</b><br />
            callback is always a function, it runs only when the execution of async code is completed.
            <br />
            <br />
            <br />
            <b>17. Pyramid of Doom?</b><br />
            When we have callback inside callbacks, the code get difficult to manage is called Pyramid of doom/ or <b>Callback Hell</b>.
            <br />
            <br />
            <br />
            <b>18. Promises?</b><br />
            The solution of the "callback hell" is called Promises. <br />
            A Promise is a JS OBJ that allows you to make asynchronous calls.
            <br />
            <br />
            <br />
            <b>19. Async/ Await</b><br />
            There is a special syntax to work with promises in JS. by using <b>async</b> & <b>await</b> keywords. <br /> <br />
            It is alternative of (.then) method. <br />
            <b>uses--</b>nodejs during databases, fetch, setTimeout, setInterval.
            <br />
            <br />
            <br />
            <b>20. First class Functions?</b>
            <br />
            <br />
            <b>iife--</b>immediately invoked function expression. it is used to make private variables.
        </p>

        <p>
            <b>21. Error Handling?</b><br />
            try... catch syntax. <br />
            Work Synchronously. <br />
            If there is no error, catch is ignored and else with is executed.
            <br />
            <br />
            <br />
            <b>22. Fetch API?</b><br />
            fetch is used to get data over the network.
            <br />
            <br />
            <br />
            <b>23. JS Cookies?</b><br />
            Cookies are small strings of data stored directly in the browser. <br />
            In JS, document.cookie provides access to cookies.
            <br />
            <br />
            <br />
            <b>24. Local Storage</b><br />
            Local Storage is a web storage object which are not sent to server with each request. 
            <br /> <br />
            The data survives a full page refresh and even a full browser restart.
            <br />
            <br />
            <b>Session Storage</b><br />
            used less often then local storage property & methods are same as local storage But: 
            <br /> <br />
            The Session storage exists only within the current browser tab. <br /><br />
            The data survives page refresh, but not closing/ opening the tab.
            <br /><br />
            <b>Methods:</b><br />
            <li>setItem(key, value)</li>
            <li>getItem(key)</li>
            <li>removeItem(key)</li>
            <li>clear()</li>
            <br /><br />
            "JSON.stringify(obj) -- converts obj to JSON string"<br />
            "JSON.parse(string) -- convert string to obj."<br />
            "must be a vaid JSON"
            <br />
            <br />
            <br />
            <b>25. Object-Oriented-Programing (OOPS)</b><br />
            Based on classes and objects. <br /><br />
            oop was developed to make code more flexible and easier to maintain.
            <br />
            <br />
            <b>classes</b><br />
            <li>classes are template for creating objects.</li>
            <br />
            <br />
            <b>objects</b><br />
            <li>A object is a collection of properties and a property is an association between a key & a value.</li>
            <li>objects are capable of storing complex values.</li>
            <br />
            <br />
            <br />
            <b>Constructor</b><br />
            A constructor is a member function of a class which initialize objects of a class. <br /> <br />
            constructor is automatically called when the object creates.
            <br />don't have return type. no parameter passed.
            <br />
            <br />
            It is has same name as class itself.
            <li>Default constructor</li>
            <li>Parmeterized constructor</li>
            <li>Copy constructor</li>
            <br />
            <br />
            <br />
            <b>Fuction Overloading</b><br />
            where two or more function can have same name but different parameters.
            <br />
            <br />
            <b>Function OverRiding</b><br />
            same name, parameter & return type is called overriding.
            <br />
            <br />
            <br />
            <b>Encapsulation</b><br />
            The packing of data and function into one component. <br />
            such as: binding variables, bundling, grouping together into a single unit.
            <br />
            <br />
            <br />
            <b>Polymorphism</b><br />
            that provides a way to perform a single action in different forms:  <b>Operator overloading</b>, <b>Function overloading</b>.
            <br />
            <br />
            <br />
            <b>Abstaction</b><br />
            Abstraction means displaying only essential infromation and hidding the details. <br />
            <br />
            <li>Abstaction using classes</li>
            <li>Abstaction using Header files</li>
            <br />
            <br />
            <br />
            <b>Inheritance</b><br />
            The capability of a class to derive properties and characteristics from anoter class is called inheritance.
            <li>Sub class</li>
            <li>Super class</li>
            <li>Reusablity</li>
            <br />
            <br />
            <br />
            <b>26. setTimeout()</b><br /><br />
            <li>"setTimeout(function, milliseconds)"</li>
            <li>The setTimeout() method is used to call a function after a certain period of time.</li>
            <br />
            <br />
            <b>setInterval()</b><br />
            <li>"setInterval(function,milliseconds)"</li>
            <li>The setInterval() method is used to call a function repeatedy at a specified interval of time.</li>
            <li>setInterval() will continuosly execute over a specifed amount of time.</li>
            <br />
            <b>These are timming Events.</b>
        </p>
        <br />
        <br />
      </div>
  )
}
