import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { ReactComponent as Logo } from '../assets/gab-hero.svg'
import ProjectsContent from '../content/Projects.md'
import ErrorContent from '../content/Error.md'
import { getMarkdown } from '../App.js'
import '../styles/Content.css'


const Projects = () => {
    const [markdown, setMarkdown] = useState('')
    useEffect(() => {
        getMarkdown(ProjectsContent, setMarkdown)
    }, [])

    return (
        <div className='container'>
            <div className='svg-container'>
                <Logo className='svg' />
            </div>
            <ReactMarkdown className='content' source={markdown} linkTarget={'_blank'} />
        </div>
    )
}

export default Projects