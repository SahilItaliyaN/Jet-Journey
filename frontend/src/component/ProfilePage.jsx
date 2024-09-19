import React from 'react';
import '../css/profile.css';
import '../css/style.css'
import useAuthStore from './store/authstore'

const ProfilePage = () => {

    const authuser = useAuthStore(state => state.user);
    console.log(authuser)

    return (
        <div>
            <div className="profile-container">
                <h1>My Profile</h1>
                <div className="profile-info">
                    <p><span>Name:</span> <span>{authuser.name}</span></p>
                    <p><span>Gender:</span> <span>{authuser.gender}</span></p>
                    <p><span>DOB:</span> <span>{new Date(authuser.dob).toLocaleDateString()}</span></p>
                    <p><span>Email:</span> <span>{authuser.email}</span></p>
                    <p><span>Username:</span> <span>{authuser.username}</span></p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage