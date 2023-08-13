import React from 'react'
import { github } from '../assets'
import {Link, NavLink, useLocation} from 'react-router-dom'
import { useState } from 'react'


const Home2 = () => {
    // Mobile nav toggle
    const [toggle, setToggle] = useState(false)
    //assigning location variable
    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
  
  //active link
  const active = "activenav"
  const normal = ""
  return (
    <div className='App'>
      {/* <div className='navv m-auto justify-self-auto text-center items-center py-5 sticky top-0 border-b-[1px] border-[#666] z-50'>
        <div className='flex justify-end gap-8 pr-10'>
        <h4 className='px-2'>About</h4>
        <h4 className='px-2'>Experience</h4>
        <h4 className='px-2'>Projects</h4>
        <h4 className='px-2'>Resume</h4>
        <h4 className='px-2'>Contact</h4>
        </div>        
      </div> */}
      <nav className='navv m-auto justify-self-auto text-center py-5 sticky top-0 border-b-[1px] border-[#666] z-50 w-full flex justify-end items-center'>
      <Link to="/" className='items-center text-[20px] font-light text-[#888] pl-20'><span className=' text-[#000]'>AlAgilly</span>.dev</Link>
      <ul className='list-none xm:flex hidden justify-end items-center flex-1 gap-7 pr-20'>
          <li><NavLink to="/" className={`butt2 ${({ isActive }) => isActive ? active : normal}`}>About</NavLink></li>
          <li><NavLink to="/" className={`butt2 ${({ isActive }) => isActive ? active : normal}`}>Experience</NavLink></li>
          <li><NavLink to="/" className={`butt2 ${({ isActive }) => isActive ? active : normal}`}>Projects</NavLink></li>
          <li><NavLink to="/" className={`butt2 ${({ isActive }) => isActive ? active : normal}`}>Resume</NavLink></li>
          <li><NavLink to="/" className={`butt2 ${({ isActive }) => isActive ? active : normal}`}>Contact</NavLink></li>
      </ul></nav>
      <div className='max-w-[1000px] m-auto justify-self-auto text-center items-center pt-20 pb-24'>
        <h1 className='text-[70px] font-thin'>Lynn Al Agilly</h1>
        <h3>Space Engineering Student | Web Developer</h3>
        <div className='flex mm:w-1/3 w-1/2 m-auto items-center pt-2'>
          <a href="" className='m-auto butt2'>Github</a>
          <a href="" className='m-auto butt2'>LinkedIn</a>
          <a href="" className='m-auto butt2'>Email</a>
        </div>
        <div className='grid grid-cols-2 w-1/2 m-auto gap-8 pt-8'>
          <a href='#' className='w-full relative buttc'>
            <div className='border1'></div>
            <div className='border2'></div>
            <h5>View Projects</h5>
          </a>
          <a href='#' className='w-full relative buttc'>
            <div className='border1'></div>
            <div className='border2'></div>
            <h5>Download Resume</h5>
          </a>
        </div>
      </div>
      <div className='divider w-1/3 h-[1px] m-auto mb-4'></div>
      <div className='max-w-[1000px] m-auto justify-self-auto text-center items-center tit'>
        <h2>About</h2>
        <h5>Who am I?</h5>
      </div>
      <div className='max-w-[1000px] m-auto grid grid-cols-2'>
        <div className=''>
          <p>Hello, I&apos;m Lynn - an aspiring Full-Stack Web Developer. Im a software engineering student at <a target="_blank" rel="noreferrer" href="https://www.yorku.ca/index.html">York University</a>, currently working as a DevOps Engineer at <a target="_blank" rel="noreferrer" href="https://swiftracks.com">SwiftRacks</a>. I specialize in creating picture perfect websites and bots to help accomplish everyday tasks. </p>
          <p>I have a huge passion for learning new skills; from unfamiliar programming languages to all things space & aviation. On my off time, I either stream on <a target="_blank" rel="noreferrer" href="https://www.twitch.tv/orioneb">Twitch</a> or organize and manage gaming tournaments. </p>
          <p>I&apos;m available for freelance work and am constantly looking for interesting & meaningful projects to take on. Feel free to <a href="#contact" id="nav-contact2">shoot me a message</a> if you have any questions and/or opportunities or even just to say hi! </p>
        </div>
        <div>
          <h1>Tech Stack</h1>
        </div>
      </div>
        
    </div>
  )
}

export default Home2