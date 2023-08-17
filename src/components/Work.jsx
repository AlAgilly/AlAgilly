/* eslint-disable react/prop-types */
import React from 'react'
import {Link, NavLink, useLocation} from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faGithub, faLinkedin, faLinkedinIn, faSquareTwitter, faTwitter, faJsSquare, faJava, faHtml5, faCss3, faPython, faLinux, faGit, faReact, faNode, faNodeJs, faAws, faDigitalOcean, faVuejs, faJira } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope, faEnvelope, faE, faChartLine, faDatabase, faLink, faCode, faInfo, faBook, faFile, faFileAlt, faArrowUpRightFromSquare, faCutlery, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import HoverImage from '../components/HoverImage'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import MiniProjects from './MiniProjects'
import Code from '../components/Code'
import Points from './Points'

const Work = ({
  company,
  points,
  position,
  techstack,
  className,
  link,
}) => {
  return (
    <div className={`tit smol col-span-3 items-center ${className}`}>
      <h3>{company} <a href={link} target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2xs'/></a></h3>
      <div className='grid grid-cols-3'>
        <h4 className='col-span-2'>{position}</h4>
        {/* <h5 className='justify-end text-right'>January 2020 - March 2020</h5> */}
      </div>
            <div className='divider w-full h-[1px] pb-3'></div>
        <ul>
        {points.map((points, index) => (
              <Points key={index} description={points.description}/>
        ))}
       </ul>
        <h5 className='py-3'>Tech Stack</h5>
          <div className='flex-wrap flex m-auto gap-2'>
            {techstack.map((techstack, index) => (
              <Code key={index} language={techstack.language}/>
            ))}
          </div>
        </div>
      )
}

export default Work