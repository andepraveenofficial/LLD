import React from 'react'

import { languagesList } from "./../Utils/hardData"

const About = ({ language }) => {
    return (
        <div>
            <h1 className='text-4xl text-bold'>About</h1>
            <p>{languagesList[language]}</p>
        </div>
    )
}

export default About