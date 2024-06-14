import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    // Write Authentication Logic Here
    const isAuthenticated = false;

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }
    return (
        // Open the Outlet
        <Outlet />
    )
}

export default ProtectedRoute