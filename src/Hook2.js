import React from 'react'
import { useState } from 'react';
function Hook2() {
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
      <div class="login-page">
        <form>
      <tr>
                      <td>
                      <input type="button" value="show" name="" onClick={state} ></input>
                      </td>

                  </tr>
      </form>
    <div className="form" style={{display: change? "block": "none"}}>
        <form className='change'>
      
        <table>
        <tr>
                      <td>
                          name:
                      </td>
                      <td>
                      <input type="text" placeholder="name" name=""></input>
      
                      </td>
                  </tr>
                  <tr>
                      <td>
                          password:
                      </td>
                      <td>
                      <input type="password" placeholder="password" name=""></input>
      
                      </td>
                  </tr>
                  <tr>
                      <td>
                          email:
                      </td>
                      <td>
                      <input type="eamil" placeholder="email" name=""></input>
      
                      </td>
                  </tr>
                  <tr>
                      <td>
                      <input type="button" value="submit" name=""></input>
                      </td>
                  </tr>
        </table>
      </form>
    </div>
</div>
    </div>
  )
}

export default Hook2


