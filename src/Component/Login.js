import React from 'react'
import './Login.css'
import { useForm } from 'react-hook-form'

import { useState,useRef } from 'react'





function Login() {

	const elementRef = useRef();
    const [text,settext]=useState();

    
	
    const {register,handleSubmit}=useForm()
    const submitdata=(data)=>{
		console.log(data);
		var print = document.getElementById("print_to");
        print.innerText = (data);
    }
  return (
    <div class="out">
        <div class="wrapper">
      	<div class="title">Login Form</div>
      	<form onSubmit={handleSubmit(submitdata)}>

        	<div class="field">
          		<input name='email' {...register('email')} type="text" required id="name"></input>
          		<label>E-mail</label>
        	</div>

        	<div class="field">
          		<input name='password' {...register('password')} type="password" required id="pass"></input>
          		<label>Password</label>
        	</div>

            <div class="field">
          		<input name='first_name' {...register('first_name')} type="text" required id="name"></input>
          		<label>first_name</label>
        	</div>

            <div class="field">
          		<input  name='last_name' {...register('last_name')} type="text" required id="name"></input>
          		<label>last_name</label>
        	</div>


        	<div class="field">
    
        		<button type="submit"name="button" id = "bt">Login</button>

				<p id='print_to' class="intro"></p>

        	</div>

      </form>
    </div>
    </div>
    
  )
}


export default Login

