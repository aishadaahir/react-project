import React, { useReducer } from "react";

const intial = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "incr":
      return { count: state.count + 1 };
    case "decr":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };

    default:
      break;
  }
}

function Usereducer() {
  const [state, dispatch] = useReducer(reducer, intial);

  return (
    <div>
      <h1 class="css-1cblbkl">UseReducer</h1>
      <div class="learn">
        <p class="intro">
          useState is a Hook that allows you to have state variables in
          functional components. You pass the initial state to this function and
          it returns a variable with the current state value (not necessarily
          the initial state) and another function to update this value.
        </p>
      </div>
      <div class="learn">
        <h3 class="what"> Example</h3>
        <p class="intro">
          Here is a useState example click the button and what is hiden will be
          shown.
        </p>
      </div>
      count:{state.count}
      <br />
      <button class="btnshow" onClick={() => dispatch({ type: "incr" })}>
        +
      </button>
      <button class="btnshow" onClick={() => dispatch({ type: "decr" })}>
        -
      </button>
      <button class="btnshow" onClick={() => dispatch({ type: "reset" })}>
        reset
      </button>
      <div class="codeblock">
        <pre class="shiki" data-language="jsx">{`
            import React, { useReducer } from 'react'
            import './Intro.css'
            import { useState } from 'react';
            
            const intial={count:0}
            function reducer(state,action){
                switch (action.type) {
                    case "incr":
                        return{count:state.count+1};
                    case "decr":
                         return{count:state.count-1};  
                    case "reset":
                        return{count:0};
                
                    default:
                        break;
                }
            }

            function Usestate(){
            const[state,dispatch]=useReducer(reducer,intial);

            return (
                count:{state.count}<br/>
                <button class="btnshow"  onClick={()=>
                    dispatch({type:'incr'})}>+</button>
                <button class="btnshow"  onClick={()=>
                    dispatch({type:'decr'})}>-</button>
                <button class="btnshow"  onClick={()=>
                    33dispatch({type:'reset'})}>reset</button>
                
            )
                    
        
            }

            export default Usestate

        `}</pre>
      </div>
    </div>
  );
}

export default Usereducer;
