import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './../css/login.css';
import '../css/style.css'
import logoImg from './Images/Logo/jj.png';
import useAuthStore from './store/authstore';

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const loginUser = useAuthStore((state) => state.login)

    useEffect(() => {
        const auth = localStorage.getItem('user-info');
        if (auth) {
            navigate('/')
        }
    }, [])

    const handleLogin = async () => {
        console.log(username, password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result)
        if (result.username && result.name) {
            localStorage.setItem("user-info", JSON.stringify(result))
            loginUser(result); 
            navigate('/')
        } else {
            alert("Enter Correct Details")
        }
    }

    return (
        <div>
            <div className='loginform2'>
                <div className="main-login">
                    <div className="login-container">
                        <div className="left">
                            <h1>Welcome to</h1>
                            <img src={logoImg} alt="JetJourney Logo" />
                            <p>
                                JetJourney is revolutionizing the way you travel by offering a seamless, all-in-one platform for <b>booking flight tickets, bus tickets, and hotels</b>. Whether you're planning a business trip, a family vacation, or a solo adventure, JetJourney ensures you reach your destination with ease and comfort. Our user-friendly interface and extensive network of travel options make it easier than ever to plan your perfect journey.
                            </p>
                            <h2>Don't Have an Account?</h2>
                            <button>
                                <Link to="/register" style={{ color: '#000000', textDecoration: 'none' }}>REGISTER</Link>
                            </button>
                        </div>
                        <div className="right">
                            <h2>Login</h2>
                            <p>Username</p>
                            <input type="text" placeholder="Enter Your Username" onChange={(e) => { setUsername(e.target.value) }} />
                            <p>Password</p>
                            <input type="password" placeholder="Enter Your Password" onChange={(e) => { setPassword(e.target.value) }} />
                            <button onClick={handleLogin}>
                                <Link style={{ color: '#ffffff', textDecoration: 'none' }} >LOGIN</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
