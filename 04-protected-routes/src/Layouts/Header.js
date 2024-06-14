import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1 className="text-center font-bold text-2xl">React Router</h1>
            <nav className="p-2 m-2 flex gap-3 justify-end">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/learning">Learning</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    )
}

export default Header