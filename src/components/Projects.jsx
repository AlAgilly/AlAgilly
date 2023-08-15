import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import Code from './Code'

const Projects = ({
  title,
  description,
  techstack,
  picture,
  outline,
  live,
  code,
  documentation
}) => {
  return (
    <>
      <div className='mm:col-span-2 col-span-1 '>
        <div className='relative butti m-auto w-full'>
          <img src={picture} alt="" className='im2'/>
          <img src={outline} alt="" className='im1'/>
        </div>
      </div>
      <div className='tit smol col-span-3 items-center'>
        <h3>{ title }</h3>
        <div className='divider w-full h-[1px]'></div>
        <p className='py-3 text-[15px]'>{ description }</p>
        <h4>Tech Stack</h4>
        <div className='flex-wrap flex m-auto gap-2 py-3'>
        {techstack.map((techstack, index) => (
          <Code key={index} language={techstack.language}/>
        ))}
        </div>
        <div className='flex my-3'>
          <div className={`${live ? 'block' : 'hidden'}`}><FontAwesomeIcon icon={faLink} size="sm" /><a href={live} rel="noreferrer" target='_blank' className='link mr-5 ml-2'>See Live</a>|</div>
          <div className={`${code ? 'block' : 'hidden'}`}><FontAwesomeIcon icon={faCode} size="sm" className='ml-5'/><a href={code} className='link mr-5 ml-2'>Source Code</a>|</div>
          <div className={`${documentation ? 'block' : 'hidden'}`}><FontAwesomeIcon icon={faFileLines} size="sm" className='ml-5'/><Link to={documentation} className='link mr-5 ml-2'>Documentation</Link></div>
        </div>
      </div>
    </>
  )
}

export default Projects