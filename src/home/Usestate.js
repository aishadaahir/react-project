import React from 'react'
import './Intro.css'
import { useState } from 'react';

function Usestate() {
    const[change,setchange]=useState(false);

  let state=()=>{
    if(change===true){
      setchange(false)
    }
    else{
      setchange(true)
    }
  }
  return (
    <div>
        <h1 class="css-1cblbkl">UseState</h1>
        <div class="learn">
        <p class="intro">
        useState is a Hook that allows you to have state variables in functional components. 
        You pass the initial state to this function and it returns a variable with the current 
        state value (not necessarily the initial state) and another function to update this value.
        </p>
        </div>

        
        <div class="learn">
        <h3 class="what"> Example</h3>
        <p class="intro">
            Here is a useState example click the button and what is hiden will be shown.
        </p>
        </div>

        <button class="btnshow" onClick={state}>show code</button>

        <div class="codeblock" style={{display: change? "block": "none"}}>
        <pre class="shiki"  data-language="jsx">{`
            import React from 'react'
            import { useState } from 'react';

            function Usestate(){
                const[change,setchange]=useState(false);

            let state=()=>{
                if(change==true){
                    setchange(false)
                }
                else{
                    setchange(true)
                }
            }

            return (
                <div class="codeblock" style={{display: change? "block": "none"}}>
                
            )
                    
        
            }

            export default Usestate

        `}</pre>
    </div>
    </div>
  )
}

export default Usestate