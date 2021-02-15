import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { navContainer, blurredNav, activeNav } from '../styles/styles.js'

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

const Navbar = () => {
    const location = useLocation().pathname
    const history = useHistory()
    const [active, setActive] = useState(location)

    const isActive = (path) => {
        return active === path ? activeNav : blurredNav
    }

    return (
        <nav css={navContainer}>
            <ul>
                <li css={isActive('/')} onClick={() => {
                    history.push('/')
                    setActive('/')
                }}>home</li>
                <li css={isActive('/projects')} onClick={() => {
                    history.push('/projects')
                    setActive('/projects')
                }}>projects</li>
                <li css={isActive('/cv')} onClick={() => {
                    history.push('/cv')
                    setActive('/cv')
                }}>cv</li>
            </ul>
        </nav>
    )
}

export default Navbar