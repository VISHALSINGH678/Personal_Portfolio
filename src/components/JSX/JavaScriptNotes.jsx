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
        <br />
        </p>
        <br />
        <br />
      </div>
  )
}
