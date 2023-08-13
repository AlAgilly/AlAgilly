import React from 'react'
import { github, screenshot1, screenshot2 } from '../assets'
import {Link, NavLink, useLocation} from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faGithub, faLinkedin, faLinkedinIn, faSquareTwitter, faTwitter, faJsSquare, faJava, faHtml5, faCss3, faPython, faLinux, faGit, faReact, faNode, faNodeJs, faAws, faDigitalOcean } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope, faEnvelope, faE, faChartLine, faDatabase, faLink, faCode, faInfo, faBook, faFile, faFileAlt, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import HoverImage from '../components/HoverImage'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'

const Home = () => {
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
      <nav className='navv m-auto justify-self-auto text-center py-5 sticky top-0 border-b-[1px] border-[#666] z-50 w-full flex justify-end items-center'>
        <Link to="/" className='items-center text-[20px] font-light text-[#888] pl-20'><span className=' text-[#000]'>AlAgilly</span>.dev</Link>
        <ul className='list-none xm:flex hidden justify-end items-center flex-1 gap-7 pr-20'>
            <li><NavLink to="/" className={`link ${({ isActive }) => isActive ? active : normal}`}>About</NavLink></li>
            <li><NavLink to="/" className={`link ${({ isActive }) => isActive ? active : normal}`}>Experience</NavLink></li>
            <li><NavLink to="/" className={`link ${({ isActive }) => isActive ? active : normal}`}>Projects</NavLink></li>
            <li><NavLink to="/" className={`link ${({ isActive }) => isActive ? active : normal}`}>Contact</NavLink></li>
            <li><NavLink to="/" className={`link ${({ isActive }) => isActive ? active : normal}`}>Resume</NavLink></li>
        </ul>
      </nav>
      <div className='max-w-[1000px] m-auto justify-self-auto text-center items-center pt-20 pb-24'>
        <h1 className='text-[70px] font-thin'>Lynn Al Agilly</h1>
        <h3>Space Engineering Student | Web Developer</h3>
        <div className='grid grid-cols-3 mm:w-1/3 w-1/2 m-auto items-center pt-2'>
          <a href="" className='m-auto link'>Github</a>
          <a href="" className='m-auto link'>LinkedIn</a>
          <a href="" className='m-auto link'>Email</a>
        </div>
        <div className='grid grid-cols-2 w-1/2 m-auto gap-8 pt-8'>
          <a href='#' className='w-full relative butt'>
            <div className='border1'></div>
            <div className='border2'></div>
            <h5>View Projects</h5>
          </a>
          <a href='#' className='w-full relative butt'>
            <div className='border1'></div>
            <div className='border2'></div>
            <h5>Download Resume</h5>
          </a>
        </div>
      </div>
      <div className='divider w-1/3 h-[1px] m-auto mb-4'></div>
      <div className='max-w-[1000px] m-auto justify-self-auto text-left items-center pt-10 pb-24'>
        <div className='text-center tit pb-10'>
          <h2>About Me</h2>
        </div>
        <div className='max-w-[1000px] m-auto grid grid-cols-5 gap-10'>
          <div className=' col-span-3'>
            <p className='pb-3'>Hello, I&apos;m Lynn - an aspiring Full-Stack Web Developer. Im a software engineering student at <a target="_blank" rel="noreferrer" href="https://www.yorku.ca/index.html" className='link  text-[#000] font-medium'>York University</a>, currently working as a DevOps Engineer at <a target="_blank" rel="noreferrer" href="https://swiftracks.com" className='link text-[#000] font-medium'>SwiftRacks</a>. I specialize in creating picture perfect websites and bots to help accomplish everyday tasks. </p>
            <p className='pb-3'>I have a huge passion for learning new skills; from unfamiliar programming languages to all things space & aviation; and on my off time, I stream on <a target="_blank" rel="noreferrer" href="https://www.twitch.tv/alagilly" className='link  text-[#000] font-medium'>Twitch</a>!</p>
            <p className='pb-3'>I&apos;m available for freelance work and am constantly looking for interesting & meaningful projects to take on. Feel free to <a href="#contact"  className='link  text-[#000] font-medium' id="nav-contact2">shoot me a message</a> if you have any questions and/or opportunities or even just to say hi! </p>
          </div>
          <div className='tit col-span-2'>
            <h3 className='pb-3'>Tech Stack</h3>
            <div className='flex-wrap flex m-auto gap-2'>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faJsSquare} size="lg"/>&nbsp;&nbsp;JavaScript</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faReact} size="lg" />&nbsp;&nbsp;React</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faPython} size="lg" />&nbsp;&nbsp;Python</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faNodeJs} size="lg" />&nbsp;&nbsp;NodeJS</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faE} size="lg" />&nbsp;&nbsp;Express</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faDatabase} size="lg" />&nbsp;&nbsp;MongoDB</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faJava} size="lg" />&nbsp;&nbsp;Java</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faHtml5} size="lg" />&nbsp;&nbsp;HTML</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faCss3} size="lg" />&nbsp;&nbsp;CSS</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faAws} size="lg" />&nbsp;&nbsp;AWS</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faDigitalOcean} size="lg" />&nbsp;&nbsp;Digital Ocean</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faGit} size="lg" />&nbsp;&nbsp;Git</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faChartLine} size="lg" />&nbsp;&nbsp;Matlab</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='divider w-1/3 h-[1px] m-auto mb-4'></div>
      <div className='max-w-[1000px] m-auto justify-self-auto text-left items-center pt-10 pb-24'>
        <div className='text-center tit pb-10'>
          <h2>Education</h2>
        </div>
        <div className='max-w-[1000px] m-auto grid grid-cols-5 gap-10'>

        </div>
      </div>
      <div className='divider w-1/3 h-[1px] m-auto mb-4'></div>
      <div className='max-w-[1000px] m-auto justify-self-auto text-left items-center pt-10 pb-24'>
        <div className='text-center tit pb-10'>
          <h2>Work Experience</h2>
        </div>
        <div className='max-w-[1000px] m-auto grid grid-cols-5 gap-10'>

        </div>
      </div>
      <div className='divider w-1/3 h-[1px] m-auto mb-4'></div>
      <div className='max-w-[1000px] m-auto justify-self-auto text-left items-center pt-10 pb-24'>
        <div className='text-center tit pb-10'>
          <h2>My Projects and Work</h2>
        </div>
        <div className='max-w-[1000px] m-auto grid grid-cols-5 gap-10 items-center pb-16'>
          <div className='col-span-2'>
            <div className='relative butti'>
              <img src={screenshot1} alt="" className='im2'/>
              <img src={screenshot2} alt="" className='im1'/>
            </div>
          </div>
          <div className='tit smol col-span-3 items-center'>
            <h3>York Gaming & Esports Website</h3>
            <div className='divider w-full h-[1px]'></div>
            <p className='py-3 text-[15px]'>Hello, I&apos;m Lynn - an aspiring Full-Stack Web Developer. Im a software engineering student at <a target="_blank" rel="noreferrer" href="https://www.yorku.ca/index.html" className='link  text-[#000] font-medium'>York University</a>, currently working as a DevOps Engineer at <a target="_blank" rel="noreferrer" href="https://swiftracks.com" className='link text-[#000] font-medium'>SwiftRacks</a>. I specialize in creating picture perfect websites and bots to help accomplish everyday tasks. </p>
            <h4>Tech Stack</h4>
            <div className='flex-wrap flex m-auto gap-2 py-3'>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faJsSquare} size="lg"/>&nbsp;&nbsp;JavaScript</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faReact} size="lg" />&nbsp;&nbsp;React</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faNodeJs} size="lg" />&nbsp;&nbsp;NodeJS</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faE} size="lg" />&nbsp;&nbsp;Express</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faHtml5} size="sm" />&nbsp;&nbsp;HTML</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faCss3} size="sm" />&nbsp;&nbsp;CSS</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />&nbsp;&nbsp;NotionAPI</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />&nbsp;&nbsp;InstagramAPI</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faDigitalOcean} size="sm" />&nbsp;&nbsp;Digital Ocean</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faGit} size="sm" />&nbsp;&nbsp;Git</p>
              </div>
            </div>
          <div className='flex my-3'>
            <div><FontAwesomeIcon icon={faLink} size="sm" /><a href="" className='link mr-5 ml-2'>Live Website</a></div>|
            <div><FontAwesomeIcon icon={faCode} size="sm" className='ml-5'/><a href="" className='link mr-5 ml-2'>Code</a></div>|
            <div><FontAwesomeIcon icon={faFileLines} size="sm" className='ml-5'/><a href="" className='link mr-5 ml-2'>Documentation</a></div>
          </div>
        </div>
      </div>
      {/* <div className='max-w-[1000px] m-auto grid grid-cols-5 gap-10 items-center pb-16'>
        <div className='col-span-2'>
          <div className='relative butti'>
            <img src={screenshot1} alt="" className='im2'/>
            <img src={screenshot2} alt="" className='im1'/>
          </div>
        </div>
        <div className='tit smol col-span-3 items-center'>
          <h3>Webfilms | Netflix clone</h3>
          <div className='divider w-full h-[1px]'></div>
          <p className='py-3 text-[15px]'>Hello, I&apos;m Lynn - an aspiring Full-Stack Web Developer. Im a software engineering student at <a target="_blank" rel="noreferrer" href="https://www.yorku.ca/index.html" className='link  text-[#000] font-medium'>York University</a>, currently working as a DevOps Engineer at <a target="_blank" rel="noreferrer" href="https://swiftracks.com" className='link text-[#000] font-medium'>SwiftRacks</a>. I specialize in creating picture perfect websites and bots to help accomplish everyday tasks. </p>
          <h4>Tech Stack</h4>
          <div className='flex-wrap flex m-auto gap-2 py-3'>
            <div className='relative butt'>
              <div className='border1'></div>
              <div className='border2'></div>
              <p className='buttcode'><FontAwesomeIcon icon={faJsSquare} size="lg"/>&nbsp;JavaScript</p>
            </div>
            <div className='relative butt'>
              <div className='border1'></div>
              <div className='border2'></div>
              <p className='buttcode'><FontAwesomeIcon icon={faReact} size="lg" />&nbsp;React</p>
            </div>
            <div className='relative butt'>
              <div className='border1'></div>
              <div className='border2'></div>
              <p className='buttcode'><FontAwesomeIcon icon={faNodeJs} size="lg" />&nbsp;NodeJS</p>
            </div>
            <div className='relative butt'>
              <div className='border1'></div>
              <div className='border2'></div>
              <p className='buttcode'><FontAwesomeIcon icon={faE} size="lg" />&nbsp;Express</p>
            </div>
            <div className='relative butt'>
              <div className='border1'></div>
              <div className='border2'></div>
              <p className='buttcode'><FontAwesomeIcon icon={faDatabase} size="sm" />&nbsp;MongoDB</p>
            </div>
            <div className='relative butt'>
              <div className='border1'></div>
              <div className='border2'></div>
              <p className='buttcode'><FontAwesomeIcon icon={faHtml5} size="sm" />&nbsp;html</p>
            </div>
            <div className='relative butt'>
              <div className='border1'></div>
              <div className='border2'></div>
              <p className='buttcode'><FontAwesomeIcon icon={faCss3} size="sm" />&nbsp;css</p>
            </div>
            <div className='relative butt'>
              <div className='border1'></div>
              <div className='border2'></div>
              <p className='buttcode'><FontAwesomeIcon icon={faDigitalOcean} size="sm" />&nbsp;Digital Ocean</p>
            </div>
            <div className='relative butt'>
              <div className='border1'></div>
              <div className='border2'></div>
              <p className='buttcode'><FontAwesomeIcon icon={faGit} size="sm" />&nbsp;Git</p>
            </div>
          </div>
          <div className='inline justify-start'>
            <FontAwesomeIcon icon={faLink} size="sm" /><a href="" className='link mr-5 ml-2'>Demo</a>|
            <FontAwesomeIcon icon={faCode} size="sm" className='ml-5'/><a href="" className='link mr-5 ml-2'>Code</a>
          </div>
        </div>
      </div>
      <div className='max-w-[1000px] m-auto grid grid-cols-5 gap-10 items-center pb-16'>
        <div className='col-span-2'>
          <div className='relative butti'>
            <img src={screenshot1} alt="" className='im2'/>
            <img src={screenshot2} alt="" className='im1'/>
          </div>
        </div>
        <div className='tit smol col-span-3 items-center'>
          <h3>Barker | Twitter clone</h3>
          <div className='divider w-full h-[1px]'></div>
          <p className='py-3 text-[15px]'>Hello, I&apos;m Lynn - an aspiring Full-Stack Web Developer. Im a software engineering student at <a target="_blank" rel="noreferrer" href="https://www.yorku.ca/index.html" className='link  text-[#000] font-medium'>York University</a>, currently working as a DevOps Engineer at <a target="_blank" rel="noreferrer" href="https://swiftracks.com" className='link text-[#000] font-medium'>SwiftRacks</a>. I specialize in creating picture perfect websites and bots to help accomplish everyday tasks. </p>
          <h4>Tech Stack</h4>
          <div className='flex-wrap flex m-auto gap-2 py-3'>
            <div className='relative butt'>
              <div className='border1'></div>
              <div className='border2'></div>
              <p className='buttcode'><FontAwesomeIcon icon={faJsSquare} size="lg"/>&nbsp;JavaScript</p>
            </div>
            <div className='relative butt'>
              <div className='border1'></div>
              <div className='border2'></div>
              <p className='buttcode'><FontAwesomeIcon icon={faReact} size="lg" />&nbsp;React</p>
            </div>
            <div className='relative butt'>
              <div className='border1'></div>
              <div className='border2'></div>
              <p className='buttcode'><FontAwesomeIcon icon={faNodeJs} size="lg" />&nbsp;NodeJS</p>
            </div>
            <div className='relative butt'>
              <div className='border1'></div>
              <div className='border2'></div>
              <p className='buttcode'><FontAwesomeIcon icon={faE} size="lg" />&nbsp;Express</p>
            </div>
            <div className='relative butt'>
              <div className='border1'></div>
              <div className='border2'></div>
              <p className='buttcode'><FontAwesomeIcon icon={faDatabase} size="sm" />&nbsp;MongoDB</p>
            </div>
            <div className='relative butt'>
              <div className='border1'></div>
              <div className='border2'></div>
              <p className='buttcode'><FontAwesomeIcon icon={faHtml5} size="sm" />&nbsp;html</p>
            </div>
            <div className='relative butt'>
              <div className='border1'></div>
              <div className='border2'></div>
              <p className='buttcode'><FontAwesomeIcon icon={faCss3} size="sm" />&nbsp;css</p>
            </div>
            <div className='relative butt'>
              <div className='border1'></div>
              <div className='border2'></div>
              <p className='buttcode'><FontAwesomeIcon icon={faDigitalOcean} size="sm" />&nbsp;Digital Ocean</p>
            </div>
            <div className='relative butt'>
              <div className='border1'></div>
              <div className='border2'></div>
              <p className='buttcode'><FontAwesomeIcon icon={faGit} size="sm" />&nbsp;Git</p>
            </div>
          </div>
          <div className='inline justify-start'>
            <FontAwesomeIcon icon={faLink} size="sm" /><a href="" className='link mr-5 ml-2'>Demo</a>|
            <FontAwesomeIcon icon={faCode} size="sm" className='ml-5'/><a href="" className='link mr-5 ml-2'>Code</a>
          </div>
        </div>
      </div> */}
      <div className='max-w-[1000px] m-auto grid grid-cols-3 gap-10 items-start'>
<div>
          <div className='relative butti'>
            <img src={screenshot1} alt="" className='im2'/>
            <img src={screenshot2} alt="" className='im1'/>
          </div>
          <div className='tit smol items-center'>
            <h3>Barker | Twitter clone</h3>
            <div className='divider w-full h-[1px]'></div>
            <p className='py-3 text-[15px]'>Hello, I&apos;m Lynn - an aspiring Full-Stack Web Developer. Im a software engineering student at <a target="_blank" rel="noreferrer" href="https://www.yorku.ca/index.html" className='link  text-[#000] font-medium'>York University</a>, currently working as a DevOps Engineer at <a target="_blank" rel="noreferrer" href="https://swiftracks.com" className='link text-[#000] font-medium'>SwiftRacks</a>. I specialize in creating picture perfect websites and bots to help accomplish everyday tasks. </p>
            <h4>Tech Stack</h4>
            <div className='flex-wrap flex m-auto gap-2 py-3'>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faJsSquare} size="lg"/>&nbsp;JavaScript</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faReact} size="lg" />&nbsp;React</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faNodeJs} size="lg" />&nbsp;NodeJS</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faE} size="lg" />&nbsp;Express</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faDatabase} size="sm" />&nbsp;MongoDB</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faHtml5} size="sm" />&nbsp;html</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faCss3} size="sm" />&nbsp;css</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faDigitalOcean} size="sm" />&nbsp;Digital Ocean</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faGit} size="sm" />&nbsp;Git</p>
              </div>
            </div>
            <div className='inline justify-start'>
              <FontAwesomeIcon icon={faLink} size="sm" /><a href="" className='link mr-5 ml-2'>Demo</a>|
              <FontAwesomeIcon icon={faCode} size="sm" className='ml-5'/><a href="" className='link mr-5 ml-2'>Code</a>
            </div>
          </div>
        </div>
        <div>
          <div className='relative butti'>
            <img src={screenshot1} alt="" className='im2'/>
            <img src={screenshot2} alt="" className='im1'/>
          </div>
          <div className='tit smol items-center'>
            <h3>Barker | Twitter clone</h3>
            <div className='divider w-full h-[1px]'></div>
            <div className='flex justify-start py-3 items-center'>
              <FontAwesomeIcon icon={faLink} size="sm" /><a href="" className='link mr-5 ml-2'>Demo</a>|
              <FontAwesomeIcon icon={faCode} size="sm" className='ml-5'/><a href="" className='link mr-5 ml-2'>Code</a>
            </div>
            <div className='flex-wrap flex m-auto gap-2 py-3'>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faJsSquare} size="lg"/>&nbsp;JavaScript</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faReact} size="lg" />&nbsp;React</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faNodeJs} size="lg" />&nbsp;NodeJS</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faE} size="lg" />&nbsp;Express</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faDatabase} size="sm" />&nbsp;MongoDB</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faHtml5} size="sm" />&nbsp;html</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faCss3} size="sm" />&nbsp;css</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faDigitalOcean} size="sm" />&nbsp;Digital Ocean</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faGit} size="sm" />&nbsp;Git</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='relative butti'>
            <img src={screenshot1} alt="" className='im2'/>
            <img src={screenshot2} alt="" className='im1'/>
          </div>
          <div className='tit smol'>
            <h3>Barker | Twitter clone</h3>
            <div className='divider w-full h-[1px]'></div>
            <h4>Tech Stack</h4>
            <div className='flex-wrap flex m-auto gap-2 py-3'>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faJsSquare} size="lg"/>&nbsp;JavaScript</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faReact} size="lg" />&nbsp;React</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faNodeJs} size="lg" />&nbsp;NodeJS</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faE} size="lg" />&nbsp;Express</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faDatabase} size="sm" />&nbsp;MongoDB</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faHtml5} size="sm" />&nbsp;html</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faCss3} size="sm" />&nbsp;css</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faDigitalOcean} size="sm" />&nbsp;Digital Ocean</p>
              </div>
              <div className='relative butt'>
                <div className='border1'></div>
                <div className='border2'></div>
                <p className='buttcode'><FontAwesomeIcon icon={faGit} size="sm" />&nbsp;Git</p>
              </div>
            </div>
            <div className='inline justify-start'>
              <FontAwesomeIcon icon={faLink} size="sm" /><a href="" className='link mr-5 ml-2'>Demo</a>|
              <FontAwesomeIcon icon={faCode} size="sm" className='ml-5'/><a href="" className='link mr-5 ml-2'>Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='divider w-1/3 h-[1px] m-auto mb-4'></div>
    <div className='max-w-[1000px] m-auto justify-self-auto text-left items-center pt-10 pb-24'>
      <div className='text-center tit pb-10'>
        <h2>Contact Me</h2>
      </div>
      <div className='max-w-[1000px] m-auto grid grid-cols-5 gap-10'>

      </div>
    </div>
      <nav className='m-auto justify-self-auto text-center py-5 w-full flex justify-end items-center'>
      <p className='items-center font-light text-[#000] pl-20'>Made and designed with ♡ by <Link to="/" classname='font-medium'>Lynn Al Agilly</Link></p>
      <ul className='list-none xm:flex hidden justify-end items-center flex-1 gap-7 pr-20'>
          <li><NavLink to="/" className={`link ${({ isActive }) => isActive ? active : normal}`}>Terms & Conditions</NavLink></li>
          <li><NavLink to="/" className={`link ${({ isActive }) => isActive ? active : normal}`}>Contact</NavLink></li>
      </ul>
      </nav>
    </div>
  )
}

export default Home