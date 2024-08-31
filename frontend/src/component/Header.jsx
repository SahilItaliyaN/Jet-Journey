import React from 'react'
import '../style.css'
import { Link } from 'react-router-dom'
import Logo from './Images/Logo/logo.svg'
import JJ from "./Images//Icon/account.svg"

const Header = () => {
  return (
    <div>
        <header>
        <div className="container">
            <nav>
                <ul>
                    <div className="navleft">
                        <li><Link to="#" className="accbtn"><img src={JJ}  alt='account img'/></Link></li>
                        <li><Link to="#" className="navbtn">My Tickets</Link></li>
                    </div>
                    <div className="logo">
                        <Link to="index.html"><img src={Logo} alt="Jet Journey" /></Link>
                    </div>
                    <div className="navright">
                        <li><Link to="Login.html" className="loginbtn">Login</Link></li>
                        <li><Link to="#" className="navbtn">About</Link></li>
                    </div>
                </ul>
            </nav>
        </div>
    </header>
    </div>
  )
}

export default Header
