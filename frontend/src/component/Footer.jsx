import React from 'react'
import '../style.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <section class="footer">
        <div class="footcontainer">
            <div class="footer-left">
                <ul>
                    <li><Link to="#">Blog</Link></li>
                    <li><Link to="#">Services</Link></li>
                    <li><Link to="#">Contact Us</Link></li>
                </ul>
            </div>
            <div class="footer-right">
                <h3>Get Updates</h3>
                <input type="email" placeholder="Enter Your Email" />
                <button>Subscribe</button>
                <p>Privacy Policy & Terms of Services</p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Footer
