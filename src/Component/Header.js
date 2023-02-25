import React from 'react';
import './Header.css';
import codelog from '../codelog.webp'
import {Link} from 'react-router-dom'



function Header() {
  return (
    <div class="header">
        <nav >
            <a href="" class="logo">code shift</a>
            <div class="nav-links">
                <ul>
                    <li><Link to='/'>home</Link></li>
                    <li><Link to="">mission</Link></li>
                    <li><Link to="">vission</Link></li>
                    <li><Link to="">contact us</Link></li>
                    <li><Link to='/About'>about us</Link></li>
                    <li><Link to='/Login'>login</Link></li>
                </ul>
            </div>
        </nav>
        <div class="left-sidebar"></div>
        <div class="row">
            <div class="left-col">
                <img src={codelog} alt=""></img>
            </div>
            <div class="right-col">
                <h1>Welcome to react website</h1>
                <p>A good paragraph is composed of a topic sentence or key sentence relevant supporting sentences and a closing or transition sentence. This structure is key to keeping your paragraph focused on the main idea and creating a clear and concise image</p>
            </div>
        </div>
    </div>
  )
}

export default Header