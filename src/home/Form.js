import React from 'react'
import './Intro.css'
import { useContext } from 'react'






function Form() {

    return (
    <div>
        <h1 class="css-1cblbkl">Hook Form</h1>
        <div class="learn">
        <p class="intro">
        The useRef Hook allows you to persist values between renders.
        It can be used to store a mutable value that does not cause a re-render when updated.
        It can be used to access a DOM element directly.
        useRef(initialValue) is a built-in React hook that accepts one argument as the initial 
        value and returns a reference (aka ref).
        </p>
        </div>

        <div class="learn">
        <h3 class="what"> Example</h3>
        <p class="intro">
        i am using hook form in the login page (go to the login page) to see.
        </p>
        </div>
    </div>
  )
}

export default Form