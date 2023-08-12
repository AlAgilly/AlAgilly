import React from 'react'
import {linkedin} from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faGithub, faLinkedin, faLinkedinIn, faSquareTwitter, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Old = () => {
  return (
<>
    <div className='w-full oldbg sticky top-[-467px]'>
        <div className='over'>
            <div className='max-w-[700px] m-auto text-center py-32'>
                <h1 className='text-white tracking-[0px] uppercase text-[80px]'>Lynn Al Agilly</h1>
                <h5 className='text-white tracking-[3px] uppercase text-[17px]'>Space Engineering Student | Front-End Developer</h5>
                {/* <div className='m-auto py-5 grid-cols-4 grid items-center justify-center links'>
                    <a href='#'><FontAwesomeIcon icon={faSquareGithub} size="2xl" /></a>
                    <a href='#'><FontAwesomeIcon icon={faLinkedin} size="2xl" /></a>
                    <a href='#'><FontAwesomeIcon icon={faSquareTwitter} size="2xl" /></a>
                    <a href='#'><FontAwesomeIcon icon={faSquareEnvelope} size="2xl" /></a>

                    <a href='#'><FontAwesomeIcon icon={faGithub} size="xl" /></a>
                    <a href='#'><FontAwesomeIcon icon={faLinkedinIn} size="xl" /></a>
                    <a href='#'><FontAwesomeIcon icon={faTwitter} size="xl" /></a>
                    <a href='#'><FontAwesomeIcon icon={faEnvelope} size="xl" /></a>
                </div> */}
                <div className='grid grid-cols-2 gap-5 mainbuttons my-8'>
                    <button className='py-3'>View Resume</button>
                    <button className='py-3'>Download Resume</button>
                </div>
            </div>
            <div className='navbar'>
                <div className='max-w-[1140px] m-auto py-5 grid grid-cols-4 items-center justify-center center text-center'>
                    <a href=''>About</a>
                    <a href=''>Experience</a>
                    <a href=''>Projects</a>
                    <a href=''>Contact</a>
                </div>
                {/* <div className='px-10 m-auto py-5 flex gap-16 items-right justify-end center text-center'>
                    <a href=''>About</a>
                    <a href=''>Experience</a>
                    <a href=''>Projects</a>
                    <a href=''>Contact</a>
                </div> */}
            </div>
        </div>
    </div>
    <div className='max-w-[1140px] border m-auto grid grid-cols-3 my-32'>
        <div className='col-span-2'> hello</div>
        <div className=''>
            <div className='skill'>
                <h4>
                    Languages
                </h4>
                <ul>
                <li>JavaScript</li>
                <li>Java</li>
                <li>HTML + CSS</li>
                </ul>
            </div>
            <div className='skill'>
                <h4>
                    Frameworks
                </h4>
            </div>
            <div className='skill'>
                <h4>
                    Tools & Technologies
                </h4>
            </div>
        </div>
    </div>
    <div className='max-w-[1140px] border m-auto grid grid-cols-3 my-32'>

    </div>
    <div className='max-w-[1140px] border m-auto grid grid-cols-3 my-32'>
        Hello
    </div>
</>
    )
}

export default Old