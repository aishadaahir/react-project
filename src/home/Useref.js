import React from 'react'
import { useState,useRef } from 'react'

function Useref() {
    const elementRef = useRef();
    const [text,settext]=useState();

    let setref=()=>{
        const divElement = elementRef.current.textContent;
        var print=document.getElementById("print_to");
        print.textContent=divElement;
    }
  return (
    

    <div>
        <h1 class="css-1cblbkl">UseRef</h1>
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
        <p ref={elementRef} class="intro">
        i am using useRef hook to get this text and to copy it to a div below (click the button) to see.
        </p>
        </div>

        <div id='print_to' class="intro">
        </div>
      <button class="btnshow" onClick={setref} >get text</button>

      <div class="codeblock">
        <pre class="shiki"  data-language="jsx">{`

            import React from 'react'
            import { useState,useRef } from 'react'

            function UseRef() {

                const elementRef = useRef();
                const [text,settext]=useState();

                let setref=()=>{
                const divElement = elementRef.current.textContent;
                var print=document.getElementById("print_to");
                print.textContent=divElement;
            }

            return (
                <div ref={elementRef}>
                    i am using useRef hook to get this text and to copy it it 
                    to a div below (click the button) to see.
                </div>
                <div id='print_to'>
                </div>
                <button class="btnshow" onClick={setref} >get text</button>
                
            )
                    
        
            }

            export default UseRef

        `}</pre>
    </div>
    </div>
  )
}

export default Useref