import React from 'react'
import { useState,useEffect } from 'react'

// function renderTime(){
//     var currentTime=new Date();
//     var h =currentTime.getHours();
//     var m =currentTime.getMinutes();
//     var s=currentTime.getSeconds();
//     var myclock=document.getElementById("clockdisplay");
//     myclock.textContent="time "+h+" : "+m+" : "+s;
//     myclock.innerText="time "+h+" : "+m+" : "+s;
// }
// renderTime();

// var currentTime=new Date();
//     var h =currentTime.getHours();
//     var m =currentTime.getMinutes();
//     var s=currentTime.getSeconds();
//     var myclock=document.getElementById("clockdisplay");

// function Counter({ interval }) {
    

    // const [time,settime]=useState(0);

// useEffect(()=>{
//     const intertimeout = setInterval(() => {
//         h =currentTime.getHours();
//     m =currentTime.getMinutes();
//     s=currentTime.getSeconds();
//     myclock=document.getElementById("clockdisplay");
//     // myclock.textContent="time "+h+" : "+m+" : "+s;
//     // myclock.innerText="time "+h+" : "+m+" : "+s;
//     myclock.textContent=""+s;
//     }, interval);
//     // let intervalcount=setInterval(renderTime(), interval);

//     return(()=>
//     setTimeout(setInterval()))
//     clearTimeout(setInterval)
// },[])
//     return <p id='clockdisplay'></p>;
// }


function Useeffect() {

    var [date,setDate] = useState(new Date());
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

  return (
            <div>
                <h1 class="css-1cblbkl">UseEffect</h1>
        <div class="learn">
        <p class="intro">
        The useEffect Hook allows you to perform side effects in your components.
        Some examples of side effects are: fetching data, directly updating the DOM, and timers.
        useEffect accepts two arguments. The second argument is optional.
        useEffect(function,dependency)
        </p>
        </div>

        <div class="learn">
        <h3 class="what"> Example</h3>
        <p class="intro">
        Examples of side-effects are fetch requests, manipulating DOM directly,
        using timer functions like setTimeout() which i used as the example below.
        </p>
        </div>

            {/* <p> Date : {date.toLocaleDateString()}</p> */}
            <p class="btnshow"> current Time is : {date.toLocaleTimeString()}</p>

            <div class="codeblock">
        <pre class="shiki"  data-language="jsx">{`
            import React from 'react'
            import { useState,useEffect } from 'react';

            function Useeffect() {

                var [date,setDate] = useState(new Date());
                useEffect(() => {
                    var timer = setInterval(()=>setDate(new Date()), 1000 )
                    return function cleanup() {
                        clearInterval(timer)
                    }
                
                });
                

            return (
                <p class="intro"> current Time is : {date.toLocaleTimeString()}</p>
                
            )
                    
        
            }

            export default UseEffect

        `}</pre>
    </div>


            </div>

      

  )
}

export default Useeffect