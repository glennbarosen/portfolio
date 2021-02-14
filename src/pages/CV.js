import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { ReactComponent as Logo } from '../assets/gab-hero.svg'
import CVContent from '../content/CV.md'
import { getMarkdown } from '../App.js'
import '../styles/Content.css'

const CV = () => {
    const [markdown, setMarkdown] = useState('# Fetching')
    useEffect(() => {
        getMarkdown(CVContent, setMarkdown)
    }, [])

    return (
        <div className='container'>
            <div className='svg-container'>
                <Logo className='svg' />
            </div>
            <ReactMarkdown className='cv-content' source={markdown} linkTarget={'_blank'} />


        </div>
    )
}

export default CV