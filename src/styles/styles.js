import { css } from '@emotion/react'

export const container = css`
    display: grid;
    place-items: center;
    width: min(100vw, 800px); 
    margin: 0 auto !important;
`

export const navContainer = css`
    max-width: 800px; 
	margin: 0 auto !important;
    height: auto;  

    ul {
        width: min(80vw, 400px);
        display: flex;
        align-items: center;
        justify-content:space-between;
        margin: 1.5rem 0;
        @media (max-width: 350px) {
            flex-direction: column;
        } 
    }

    li {
        font-size: 1.5rem;
        text-transform: uppercase;
        list-style: none;
        @media (max-width: 350px) {
            margin: 0.5rem 0;
        } 
    }
`

export const blurredNav = css`
    color: transparent;
    text-shadow: 0 0 4px rgba(0,0,0,1);
    :hover {
        text-shadow: 0 0 0px rgba(0,0,0,1);
        transition: all 0.4s ease 0s;
    }
`

export const activeNav = css`
    text-decoration: underline;
`

export const content = css`
    display: grid;
    place-items: center;
    grid-gap: 1.5rem;

    a, p {
        font-family: 'Ubuntu Mono', monospace;
        font-size: 1.3rem;
        letter-spacing: 0.1rem;
        :hover {  
            text-shadow: 3px 2px 5px rgba(0, 0, 0, 0.5);
            cursor: pointer;
            transition: all 0.4s ease 0s;
        }
    }
    em {
        color: rgba(0, 0, 0, 0.4);
        :hover {
            cursor: not-allowed;
        }
    }
`
export const contentCV = css`
    width: min(85vw, 800px);
    line-height: 1.5rem;
    margin-bottom: 3rem;
    h2 {
        text-decoration: underline;
        margin-bottom:0.5rem;
    }
    p {
        font-family: 'Ubuntu Mono', monospace;
        padding-left: 1rem;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-left: 2rem;
        @media (max-width: 650px) {
            flex-wrap: wrap;
        }
    }
    li {
        font-family: 'Ubuntu Mono', monospace;
        margin: 1rem 1rem;
        a {
            color: #000;
            text-decoration: none;
            font-family: 'Ubuntu Mono', monospace;
            :hover {
                text-shadow: 3px 2px 5px rgba(0, 0, 0, 0.5);
                transition: all 0.4s ease 0s;
            }
            
        }

    }
    code {
        color: #f5f5f5;
    }
    hr {
        margin: 2rem 0;
    }

    h5 {
        font-family: 'Ubuntu Mono', monospace;
        color: rgba(0, 0, 0, 0.6);
        padding-left: 3rem;
    }
`

export const cvLinks = css`
    margin-bottom: 2rem;
    font-family: 'Ubuntu Mono', monospace;
    a {
        font-family: 'Ubuntu Mono', monospace;
        text-decoration: none;
        color: #000;
        :hover {
            text-shadow: 3px 2px 5px rgba(0, 0, 0, 0.5);
            transition: all 0.4s ease 0s;
        }
    }   
`

export const logo = css`
    width: min(80vw, 400px);
    height: min(20vh, 300px);
    margin: 2rem 0;
`



