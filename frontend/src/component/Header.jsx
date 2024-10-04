import React, { useState } from 'react'
import '../css/style.css'
import '../css/profile.css' 
import { Link } from 'react-router-dom'
import Logo from './Images/Logo/logo.svg'
import JJ from "./Images//Icon/account.svg"

const Header = () => {
    const [header,setHeader] = useState(false);

  return (
    <div>
        <header>
        <div className="container">
            <nav>
                <ul>
                    <div className="navleft">
                        <li><Link to="/profile" className="accbtn"><img src={JJ}  alt='account img'/></Link></li>
                        <li><Link to="/myticket" className="navbtn">My Tickets</Link></li>
                    </div>
                    <div className="logo">
                        <Link to="/"><img src={Logo} alt="Jet Journey" /></Link>
                    </div>
                    <div className="navright">
                        {header ? <li><Link to="login" className="loginbtn">Login</Link></li> : <li><Link onClick={()=>{localStorage.removeItem('user-info')}} to="login" className="loginbtn">Logout</Link></li>}
                        
                        <li><Link to="/" className="navbtn">About</Link></li>
                    </div>
                </ul>
            </nav>
        </div>
    </header>
    </div>
  )
}

export default Header
