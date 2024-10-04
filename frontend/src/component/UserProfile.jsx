import React from 'react'
import useAuthStore from './store/authstore'

const UserProfile = () => {
    const authuser = useAuthStore(state => state.user);

    if (!authuser) {
        return <h2 style={{ textAlign: 'center' }}>Loading...</h2>; // Loading state or handle unauthenticated user
    }

    return (
        <div>
            <div className="profile-container">
                <h1>My Profile</h1>
                <div className="profile-info">
                    <p><span>Name:</span> <span>{authuser.name}</span></p>
                    <p><span>Gender:</span> <span>{authuser.gender}</span></p>
                    <p><span>DOB:</span> <span>{new Date(authuser.dob).toLocaleDateString()}</span></p> {/* Format the date */}
                    <p><span>Email:</span> <span>{authuser.email}</span></p>
                    <p><span>Username:</span> <span>{authuser.username}</span></p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile