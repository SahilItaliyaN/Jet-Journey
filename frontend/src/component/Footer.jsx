import React from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom'
import logo from './Images/Logo/logo.svg';  // Imported logo for the footer

const Footer = () => {
    return (
        <div>
            <section className="footer">
                <div className="footcontainer">
                    <div className="footer-left">
                        <ul>
                            <li><Link to="#">Blog</Link></li>
                            <li><Link to="#">Services</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-right">
                        <h3>Get Updates</h3>
                        <input type="email" placeholder="Enter Your Email" />
                        <button>Subscribe</button>
                        <img src={logo} className="footerlogo" alt="Jet Journey" />
                        <p>Privacy Policy & Terms of Services</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
