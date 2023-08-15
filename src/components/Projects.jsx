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
  documentation,
  className,
}) => {
  return (
    <>
      <div className='sm:col-span-2 col-span-1 '>
        <div className='relative butti m-auto w-full'>
          <img src={picture} alt="" className='im2'/>
          <img src={outline} alt="" className='im1'/>
        </div>
      </div>
      <div className={`tit smol col-span-3 items-center ${className}`}>
        <h3>{ title }</h3>
        <div className='divider w-full h-[1px]'></div>
        <p className='py-3 text-[15px]'>{ description }</p>
        <h4>Tech Stack</h4>
        <div className='flex-wrap flex m-auto gap-2 py-3'>
        {techstack.map((techstack, index) => (
          <Code key={index} language={techstack.language}/>
        ))}
        </div>
        <div className='flex flex-col xs:flex-row my-3'>
          <div className={`${live ? 'inline-block' : 'hidden'}`}><FontAwesomeIcon icon={faLink} size="sm" /><a href={live} rel="noreferrer" target='_blank' className='link ml-2'>Live Preview</a><span className='xs:inline hidden mx-2 mm:mx-5'>|</span></div>
          <div className={`${code ? 'inline-block' : 'hidden'}`}><FontAwesomeIcon icon={faCode} size="sm"/><a href={code} className='link ml-2'>Code</a><span className='xs:inline hidden mx-2 mm:mx-5'>|</span></div>
          <div className={`${documentation ? 'inline-block' : 'hidden'}`}><FontAwesomeIcon icon={faFileLines} size="sm"/><Link to={documentation} className='link ml-2'>Documentation</Link></div>
        </div>
      </div>
    </>
  )
}

export default Projects