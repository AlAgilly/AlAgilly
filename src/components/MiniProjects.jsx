/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import Code from './Code'

const MiniProjects = ({
  title,
  description,
  techstack,
  picture,
  outlineb,
  outlinew,
  live,
  code,
  documentation,
  className,
}) => {
  return (
    <>
      <div className='sm:col-span-2 col-span-1 '>
        <a href={live} rel="noreferrer" target='_blank' className={`${live ? 'inline' : 'hidden'}`}>
        <div className='relative butti m-auto w-full'>
          <img src={picture} alt="" className='im2'/>
          <img src={outlineb} alt="" className='im1b'/>
          <img src={outlinew} alt="" className='im1w'/>
        </div>
        </a>
        <div className={`relative butti m-auto w-full ${live ? 'hidden' : 'block'}`}>
          <img src={picture} alt="" className='im2'/>
          <img src={outlineb} alt="" className='im1b'/>
          <img src={outlinew} alt="" className='im1w'/>
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
          <div className={`${live ? 'inline-block' : 'hidden'}`}><FontAwesomeIcon icon={faLink} size="sm" /><a href={live} rel="noreferrer" target='_blank' className='link ml-2'>Live Preview</a><span className={`${documentation ? 'xs:inline hidden mx-2 mm:mx-5' : (code ? 'xs:inline hidden mx-2 mm:mx-5' : 'hidden')}`}>|</span></div>
          <div className={`${code ? 'inline-block' : 'hidden'}`}><FontAwesomeIcon icon={faCode} size="sm"/><a href={code} rel="noreferrer" target='_blank' className='link ml-2'>Code</a><span className={`${documentation ? 'xs:inline hidden mx-2 mm:mx-5' : 'hidden'}`}>|</span></div>
          <div className={`${documentation ? 'inline-block' : 'hidden'}`}><FontAwesomeIcon icon={faFileLines} size="sm"/><Link to={`/projects/${documentation}`} className='link ml-2'>Documentation</Link></div>
        </div>
      </div>
    </>
  )
}

export default MiniProjects