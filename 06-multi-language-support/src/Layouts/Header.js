import React from 'react'

const Header = ({ setLanguage }) => {
    return (
        <div>
            <select onChange={(e) => setLanguage(e.target.value)}>
                <option value="english">English</option>
                <option value="telugu">Telugu</option>
                <option value="hindi">Hindi</option>
                <option value="tamil">Tamil</option>
            </select>
        </div>
    )
}

export default Header