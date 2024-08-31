import React from 'react';
import { Link } from 'react-router-dom';
import './../css/login.css';
import '../style.css'
import logoImg from './Images/Logo/jj.png';

const Register = () => {
    return (
        <div>
            <div className="main-login">
                <div className="reg-container">
                    <div className="regleft">
                        <h1>Welcome to</h1>
                        <img src={logoImg} alt="JetJourney Logo" />
                        <p>
                            JetJourney is revolutionizing the way you travel by offering a seamless, all-in-one platform for <b>booking flight tickets, bus tickets, and hotels</b>. Whether you're planning a business trip, a family vacation, or a solo adventure, JetJourney ensures you reach your destination with ease and comfort. Our user-friendly interface and extensive network of travel options make it easier than ever to plan your perfect journey.
                        </p>
                        <h2>Have an Account?</h2>
                        <button>
                            <Link to="/login" style={{ color: '#000000', textDecoration: 'none' }}>LOGIN</Link>
                        </button>
                    </div>
                    <div className="regright">
                        <h2>Register</h2>
                        <p>Name</p>
                        <input type="text" placeholder="Enter Your Name" />
                        <p>Email</p>
                        <input type="email" placeholder="Enter Your Email" />
                        <p>DOB</p>
                        <input type="date" />
                        <p>Gender</p>
                        <div className="gender">
                            <input type="radio" name="gender" value="male" /> Male
                            <input type="radio" name="gender" value="female" /> Female
                        </div>
                        <p>Username</p>
                        <input type="text" placeholder="Enter Your Username" />
                        <p>Password</p>
                        <input type="password" placeholder="Enter Your Password" />
                        <button>
                            <Link to="/index" style={{ color: '#ffffff', textDecoration: 'none' }}>REGISTER</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
