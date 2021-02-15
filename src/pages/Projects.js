import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import ProjectsContent from '../content/Projects.md'
import { getMarkdown } from '../App.js'
import { container, content } from '../styles/styles'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

const Projects = () => {
    const [markdown, setMarkdown] = useState('')
    useEffect(() => {
        getMarkdown(ProjectsContent, setMarkdown)
    }, [])

    return (
        <div css={container}>
            <ReactMarkdown css={content} children={markdown} linkTarget={'_blank'} />
        </div>
    )
}

export default Projects