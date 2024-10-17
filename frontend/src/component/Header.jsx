import React, { useState } from 'react'
import '../css/style.css'
import '../css/profile.css' 
import { Link } from 'react-router-dom'
import Logo from './Images/Logo/logo.svg'
import JJ from "./Images//Icon/account.svg"

const Header = () => {
    const [Logout,setLogout] = useState(!localStorage.getItem('user-info'));

    const LogoutHandler = () =>{
        if(localStorage.getItem('user-info')){
            localStorage.removeItem('user-info');
            setLogout(true);
        }else{
            setLogout(false);
        }
    }

  return (
    <div>
        <header>
        <div className="container">
            <nav>
                <ul>
                    <div className="navleft">
                        <li><Link to={Logout ? "/login" : "/profile"} className="accbtn"><img src={JJ}  alt='account img'/></Link></li>
                        <li><Link to={Logout ? "/login" : "/myticket"} className="navbtn">My Tickets</Link></li>
                    </div>
                    <div className="logo">
                        <Link to={Logout ? "/login" : "/"}><img src={Logo} alt="Jet Journey" /></Link>
                    </div>
                    <div className="navright">
                        {Logout ? (
                                <li><Link to="/login" className="loginbtn" onClick={LogoutHandler}>Login</Link></li>
                            ) : (
                                <li><Link to="/login" className="loginbtn" onClick={LogoutHandler}>Logout</Link></li>
                        )}
                        <li><Link to={Logout ? "/login" : "/"} className="navbtn">About</Link></li>
                    </div>
                </ul>
            </nav>
        </div>
    </header>
    </div>
  )
}

export default Header
