import React from 'react'
import codelog from '../codelog.webp'
import './Footer.css'


function Footer() {
  return (
    <div>
        <footer class="footer">
        <div class="footer-left">
            <img src={codelog} alt=""></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam adipisci, at voluptatibus cupiditate ut repellendus neque veniam error, ex reprehenderit perferendis provident corporis. Maxime, nisi.
                 Recusandae porro aspernatur quos ea.</p>
                 <div class="socials">
                    <a><i class="fa fa-facebook"></i></a>
                    <a><i class="fa fa-twitter"></i></a>
                    <a><i class="fa fa-youtube"></i></a>
                    <a><i class="fa fa-whatsapp"></i></a>
                 </div>
        </div>
        <ul class="footer-right">
            <li>
                <h2>product</h2>
                <ul class="box">
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                </ul>
            </li>
            <li class="features">
                <h2>links</h2>
                <ul class="box">
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                </ul>
            </li>
            <li>
                <h2>address</h2>
                <ul class="box">
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                    <li><a href="#">theme design</a></li>
                </ul>
            </li>
        </ul>
        <div class="footer-bottom">
            <p>copy right 2022</p>
        </div>
    </footer>
    </div>
  )
}

export default Footer