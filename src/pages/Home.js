import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import HomeContent from '../content/Home.md'
import '../styles/Content.css'
import { ReactComponent as Logo } from '../assets/gab-hero.svg'

import { getMarkdown } from '../App.js'


const Home = () => {

    const [markdown, setMarkdown] = useState('# Fetching')
    useEffect(() => {

        getMarkdown(HomeContent, setMarkdown)
    }, [])

    return (
        <div className='container'>
            <Logo />
            <div className='content'>
                <ReactMarkdown source={markdown} linkTarget={'_blank'} />
            </div>
        </div>
    )
}

export default Home