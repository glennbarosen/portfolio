import React from 'react'
import '../styles/Projects.css'

const Project = (props) => {
    const codeURL = 'https://github.com/glennbarosen/' + props.repo
    const demoURL = 'https://' + props.subdomain + 'glennbarosen.me'

    const demoTextStyle = () => {
        return props.hasDemo === 'true' ? '' : 'disabled-link'
    }

    return (
        <div>
            <div className='project'>
                {props.name}&nbsp;&nbsp;-&nbsp;&nbsp;<a target='_blank' href={codeURL} >code</a>&nbsp;&nbsp;/&nbsp;&nbsp;<a className={demoTextStyle()} href={demoURL} target='blank'>demo</a>
            </div>


        </div>
    )
}

export default Project