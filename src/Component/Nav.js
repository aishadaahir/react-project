import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div>
        <nav >
            <a href="" class="logo">code shift</a>
            <div class="nav-links">
                <ul>
                    <li><Link to='/body'>home</Link></li>
                    <li><Link to='/mission'>mission</Link></li>
                    <li><Link to='/vission'>vission</Link></li>
                    <li><Link to='/contact'>contact us</Link></li>
                    <li><Link to='/About'>about us</Link></li>
                    <li><Link to='/Login'>login</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Nav