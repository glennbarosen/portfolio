import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { ReactComponent as Logo } from '../assets/gab-hero.svg'
import CVContent from '../content/CV.md'
import noCV from '../assets/cv-gab-no.pdf'
import enCV from '../assets/cv-gab-en.pdf'
import { getMarkdown } from '../App.js'
import '../styles/Content.css'

const CV = () => {
    const [markdown, setMarkdown] = useState('')
    useEffect(() => {
        getMarkdown(CVContent, setMarkdown)
    }, [])

    return (
        <div className='container'>
            <div className='svg-container'>
                <Logo className='svg' />
            </div>
            <p className='cv-dl'>
                pdf version - <a
                    className='cv-link'
                    href={noCV}
                    rel="noopener noreferrer"
                    target="_blank">norwegian</a> / <a
                        className='cv-link'
                        href={enCV}
                        rel="noopener noreferrer"
                        target="_blank">english</a>
            </p>
            <ReactMarkdown className='cv-content'
                children={markdown}
                linkTarget={'_blank'} />


        </div>
    )
}

export default CV