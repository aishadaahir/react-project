import React from 'react'
import './Intro.css'

function Intro() {
  return (
    <div>
        <h1 class="css-1cblbkl">React Programing</h1>
        <div class="learn">
        <h3 class="what"> What is React</h3>
        <p class="intro">
        React (also known as React.js or ReactJS) is a free and open-source front-end 
    JavaScript library for building user interfaces based on UI components. 
    It is maintained by Meta (formerly Facebook) and a community of individual 
    developers and companies. React can be used as a base in the development 
    of single-page, mobile, or server-rendered applications with frameworks like Next.js. 
    However, React is only concerned with state management and rendering that state to 
    the DOM, so creating React applications usually requires the use of additional 
    libraries for routing, as well as certain client-side functionality.
        </p>
        </div>
        <div class="learn">
        <h3 class="what">Why Learn React?</h3>
        <p class="intro">
        ReactJS offers graceful solutions to some of front-end programming’s
        most persistent issues, allowing you to build dynamic and interactive web apps with ease. 
        It’s fast, scalable, flexible, powerful, and has a robust developer community that’s rapidly
        growing. There’s never been a better time to learn React.
        </p>
        </div>

    </div>
  )
}

export default Intro