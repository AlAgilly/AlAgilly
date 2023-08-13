import React from 'react'
import {linkedin} from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faGithub, faLinkedin, faLinkedinIn, faSquareTwitter, faTwitter, faJsSquare, faJava, faHtml5, faCss3, faPython, faLinux, faGit, faReact, faNode, faNodeJs, faAws, faDigitalOcean } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope, faEnvelope, faE, faChartLine, faDatabase } from '@fortawesome/free-solid-svg-icons'

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
    <div className='max-w-[1140px] m-auto grid grid-cols-3 my-32'>
        <div className='col-span-2'> hello</div>
        <div className=''>
            <div className='skill'>
                <h4>
                    Tech Stack
                </h4>
  
                <p className='lang'><FontAwesomeIcon icon={faJsSquare} size="lg" />&nbsp;JavaScript</p>
                <p className='lang'><FontAwesomeIcon icon={faJava} size="lg" />&nbsp;Java</p>
                <p className='lang'><FontAwesomeIcon icon={faHtml5} size="lg" />&nbsp;HTML</p>
                <p className='lang'><FontAwesomeIcon icon={faCss3} size="lg" />&nbsp;CSS</p>
                <p className='lang'><FontAwesomeIcon icon={faPython} size="lg" />&nbsp;Python</p>
                <p className='lang'><FontAwesomeIcon icon={faChartLine} size="lg" />&nbsp;MATLAB</p>
              

                <p className='framework'><FontAwesomeIcon icon={faReact} size="lg" />&nbsp;React</p>
                <p className='framework'><FontAwesomeIcon icon={faNodeJs} size="lg" />&nbsp;NodeJS</p>
                <p className='framework'><FontAwesomeIcon icon={faE} size="lg" />&nbsp;Express</p>

                <p className='tech'><FontAwesomeIcon icon={faLinux} size="lg" />&nbsp;Linux</p>
                <p className='tech'><FontAwesomeIcon icon={faGit} size="lg" />&nbsp;Git</p>
                <p className='tech'><FontAwesomeIcon icon={faDatabase} size="lg" />&nbsp;MongoDB</p>
                <p className='tech'><FontAwesomeIcon icon={faAws} size="lg" />&nbsp;AWS</p>
                <p className='tech'><FontAwesomeIcon icon={faDigitalOcean} size="lg" />&nbsp;Digital Ocean</p>
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