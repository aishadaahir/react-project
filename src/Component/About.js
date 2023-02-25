import React from 'react'
import './About.css'
import program from '../programing.png';

function About() {
  return (
    <div class="content">
					<img class="imgpro" src={program}></img>
					<div class="text">
					  <h3>about us</h3>
              <h3>Welcome To 
                <span id="W_Name1">code shift</span>
              </h3>
					    <p>code shift is a Professional education
              Platform. Here we will provide you only interesting content, which you will 
              like very much. We're dedicated to providing you the best of education, with
              a focus on dependability and tech tutorial. We're working to turn our passion 
              for education into a booming online website. We hope you enjoy our education 
              as much as we enjoy offering them to you.
              I will keep posting more important posts on my Website for all of you. 
              Please give your support and love.
              </p>
				</div>
			</div>
  )
}

export default About