import React, { useState } from 'react'
import '../styles/Navbar.css'
import { useLocation, useHistory } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation().pathname
    const history = useHistory()
    const [active, setActive] = useState(location)

    const isActive = (path) => {
        return active === path ? 'line' : 'blur'
    }

    return (
        <div className='nav-container'>
            <nav>
                <ul className='nav-links'>
                    <li className={isActive('/')} onClick={() => {
                        history.push('/')
                        setActive('/')
                    }}>home</li>
                    <li className={isActive('/projects')} onClick={() => {
                        history.push('/projects')
                        setActive('/projects')
                    }}>projects</li>
                    <li className={isActive('/cv')} onClick={() => {
                        history.push('/cv')
                        setActive('/cv')
                    }}>cv</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar