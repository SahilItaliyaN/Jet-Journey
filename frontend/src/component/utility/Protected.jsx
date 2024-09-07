import React from 'react'
import useAuthStore from '../store/authstore'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const authuser = useAuthStore(state => state.user);

    return (authuser ? <Outlet /> : <Navigate to={"/login"} />)
}

export default ProtectedRoute