import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './../css/login.css';
import '../css/style.css'
import logoImg from './Images/Logo/jj.png';
import useAuthStore from './store/authstore';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState(''); // Date of Birth
    const [gender, setGender] = useState(''); // Gender
    const [username, setUsername] = useState(''); // Username
    const [password, setPassword] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const authuser = useAuthStore(state => state.login)

    useEffect(() => {
        const auth = localStorage.getItem('user-info');
        if (auth) {
            navigate('/');
        }
    }, [navigate]);

    const collectData = async () => {
        try {
            console.log(name, email, dob, gender, username, password);
        let result = await fetch('http://localhost:5000/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, dob, gender, username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        authuser(result)
        console.log(result);
        if (result) {
            localStorage.setItem("user-info", JSON.stringify(result));
            navigate('/');
        }
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred. Please try again.");
        }
    };

    const buttonStyle = {   
        backgroundColor: isHovered ? '#fff3d9' : '#000', // Change background on hover
        transition: 'background-color 0.3s ease',
    };

    const linkStyle = {
        color: isHovered ? '#000' : '#fff3d9', // Change text color based on hover
        textDecoration: 'none',
        transition: 'color 0.3s ease',
    };



    return (
        <div>
            <div className='regform2'>
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
                            <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)}  required />
                            <p>Email</p>
                            <input type="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)}  required />
                            <p>DOB</p>
                            <input type="date" onChange={(e) => setDob(e.target.value)}  required />
                            <p>Gender</p>
                            <div className="gender">
                                <input type="radio" name="gender" value="male" onChange={(e) => setGender("male")}  /> Male
                                <input type="radio" name="gender" value="female" onChange={(e) => setGender("female")}  /> Female
                            </div>
                            <p>Username</p>
                            <input type="text" placeholder="Enter Your Username" onChange={(e) => setUsername(e.target.value)} required />
                            <p>Password</p>
                            <input type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)}  required />
                            <button onClick={collectData} style={buttonStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                                <Link style={linkStyle}>REGISTER</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;