import React from 'react'
import { github, screenshot1, yorkb, yorkw, screenshot3, spotifyb, spotifyw } from '../assets'
import {Link, NavLink, useLocation} from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faGithub, faLinkedin, faLinkedinIn, faSquareTwitter, faTwitter, faJsSquare, faJava, faHtml5, faCss3, faPython, faLinux, faGit, faReact, faNode, faNodeJs, faAws, faDigitalOcean, faVuejs, faJira } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope, faE, faChartLine, faDatabase, faLink, faCode, faInfo, faBook, faFile, faFileAlt, faArrowUpRightFromSquare, faCutlery, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import MiniProjects from '../components/MiniProjects'
import { fullstack, project, works } from '../constants'
import Code from '../components/Code'
import Work from '../components/Work'
import Navbar from '../components/Navbar'
import Divider from '../components/Divider'
import Section from '../components/Section'
import { useRef } from 'react'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { useEffect } from 'react'

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

  document.addEventListener('click', function(event) {
    if (!event.target.matches('.btn-scroll-into')) return;
  
    event.preventDefault();
    
    var element = document.getElementById(event.target.dataset.target);
    
    element.scrollIntoView({behavior: "smooth"});
  
  });

  const locationp = useLocation();
  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [locationp]);
  return (
    <div className='App'>
          <nav className='navv m-auto justify-self-auto text-center py-5 sticky top-0 border-b-[1px] border-[#666] z-50 w-full xm:flex justify-end items-center'>
        <Link to="/" className='items-center text-[20px] font-light text-[#aaa] xm:ml-20 pl-0 xm:text-left text-center'><span className=''>AlAgilly</span>.dev</Link>
        <ul className='list-none justify-end items-center flex-1 gap-3 mm:gap-7 pr-16 mm:pr-20 xm:flex hidden'>
          <li><a data-target="about" className="btn-scroll-into link2">About</a></li>
          <li><a data-target="projects" className="btn-scroll-into link2">Projects</a></li>
          <li><a data-target="work" className="btn-scroll-into link2">Experience</a></li>
          <li><a data-target="contact" className="btn-scroll-into link2">Contact</a></li>
            {/* <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="slider round"></div>
                </label>
            </div> */}
        </ul>
    </nav>
      <div className='max-w-[1000px] m-auto justify-self-auto text-center items-center pt-24 xs:px-10 px-4'>
        <h1 className='text-[70px] font-thin'>Lynn Al&nbsp;Agilly</h1>
        <h3 className='pt-3'>Space Engineering Student | Web Developer</h3>
        <div className='grid grid-cols-3 xm:w-1/2 w-full m-auto items-center pt-2'>
          <a href="https://github.com/AlAgilly" className='m-auto link2'>Github</a>
          <a href="https://www.linkedin.com/in/lynnalagilly/" className='m-auto link2'>LinkedIn</a>
          <a href="mailto:lynn.alagilly@yahoo.ca" className='m-auto link2'>Email</a>
        </div>
        <div className='grid xs:grid-cols-2 grid-cols-1 xm:w-1/2 w-full m-auto gap-6 pt-8'>
          <Link className="w-full relative butt buttb" to='projects'>
            <div className='border1'></div>
            <div className='border2'></div>
            <h5>View All Projects</h5>
          </Link>
          <a href='#' className='w-full relative butt buttb'>
            <div className='border1'></div>
            <div className='border2'></div>
            <h5>Download Resume</h5>
          </a>
        </div>
      </div>
      <div className='secdivider w-1/3 h-[1px] m-auto mb-[100px]' id="about"></div>
        <div className='m-auto justify-self-auto text-left items-center xs:px-10 px-8'>
            <div className='text-center tit'>
                <h2>About</h2>
            </div>
          <div className='max-w-[1000px] m-auto grid mm:grid-cols-5 sm:grid-cols-2 grid-cols-1 sm:gap-10 pt-12 items-center'>
          <div className='col-span-1 mm:col-span-3'>
            <p className='pb-3'>Hello, I&apos;m Lynn - an aspiring Full-Stack Web Developer. Im a software engineering student at <a target="_blank" rel="noreferrer" href="https://www.yorku.ca/index.html" className='link  text-[#000] font-medium'>York University</a>, currently working as a DevOps Engineer at <a target="_blank" rel="noreferrer" href="https://swiftracks.com" className='link text-[#000] font-medium'>SwiftRacks</a>. I specialize in creating picture perfect websites and bots to help accomplish everyday tasks. </p>
            <p className='pb-3'>I have a huge passion for learning new skills; from unfamiliar programming languages to all things space & aviation; and on my off time, I stream on <a target="_blank" rel="noreferrer" href="https://www.twitch.tv/alagilly" className='link  text-[#000] font-medium'>Twitch</a>!</p>
            <p className=''>I&apos;m available for freelance work and am constantly looking for interesting & meaningful projects to take on. Feel free to <a href="#contact"  className='link  text-[#000] font-medium' id="nav-contact2">shoot me a message</a> if you have any questions and/or opportunities or even just to say hi! </p>
          </div>
          <div className='tit mm:col-span-2 col-span-1'>
            <h3 className='pb-3'>Tech Stack</h3>
            <div className='flex-wrap flex m-auto gap-2 pb-3'>
              {fullstack.map((fullstack, index) => (
                <Code key={fullstack.language} language={fullstack.language}/>
              ))}
            </div>
          </div>
        </div>
      </div>
            <div className='mb-[100px] m-auto relative'>
      <div className='secdivider w-1/3 h-[1px] m-auto' id="projects"></div>
      <div className='leftdivcont w-full h-[10px]'>
        <div className='leftdiv1 w-[10%] h-[1px] absolute'></div>
        <div className='leftdiv w-[15%] h-[1px]'></div>
        <div className='leftdiv2 w-[10%] h-[1px] absolute'></div>
      </div>
      <div className='rightdivcont w-full h-[10px]'>
        <div className='rightdiv1 w-[10%] h-[1px] absolute'></div>
        <div className='rightdiv w-[15%] h-[1px]'></div>
        <div className='rightdiv2 w-[10%] h-[1px] absolute'></div>
      </div>            </div>
        <div className='m-auto justify-self-auto text-left items-center xs:px-10 px-8'>
            <div className='text-center tit'>
                <h2>Projects</h2>
            </div>
        <div className=' max-w-[1000px] m-auto grid sm:grid-cols-5 grid-cols-1 sm:gap-10 items-center pt-12'>
        {project.map((projects, index) => (
          <MiniProjects key={projects.id} title={projects.title} description={projects.description} techstack={projects.techstack} picture={projects.picture} outlineb={projects.outlineb} outlinew={projects.outlinew} live={projects.live} code={projects.code} documentation={projects.documentation} className={`${index < (Object.keys(project).length - 1) ? 'my-3' : 'my-3'}`}/>
        ))}
        </div>
        <div className='text-center tit py-12'>
          <h3><Link to='projects' className='link'>View all Projects</Link></h3>
        </div>
        </div>

      <div className='secdivider w-1/3 h-[1px] m-auto mb-[100px]'></div>
      <div className='m-auto justify-self-auto text-left items-center xs:px-10 px-8'>
            <div className='text-center tit'>
                <h2>Education</h2>
            </div>
          <div className='max-w-[800px] m-auto py-12'>
        <div className={`tit smol col-span-3 items-center `}>
      <h3>York University <a href='https://yorku.ca' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2xs'/></a></h3>
        <h4 className='col-span-2'>Space Engineering (BEng Hons.)</h4>
            <div className='divider w-full h-[1px] pb-3'></div>
        <ul>
        <h5>Relevent Courses:</h5>
              <div className='grid grid-cols-1 sm:grid-cols-2'>
              <li className='flex items-start mb-1'><FontAwesomeIcon icon={faArrowRight} size="sm"  className='pt-[5px]'/><p>Computational Thinking</p></li>  
              <li className='flex items-start mb-1'><FontAwesomeIcon icon={faArrowRight} size="sm"  className='pt-[5px]'/><p>Object Oriented Programming</p></li>  
              <li className='flex items-start mb-1'><FontAwesomeIcon icon={faArrowRight} size="sm"  className='pt-[5px]'/><p>Software Development Project</p></li>  
              <li className='flex items-start mb-1'><FontAwesomeIcon icon={faArrowRight} size="sm"  className='pt-[5px]'/><p>Introduction to Embedded Systems</p></li>  
              <li className='flex items-start mb-1'><FontAwesomeIcon icon={faArrowRight} size="sm"  className='pt-[5px]'/><p>Advanced Object Oriented Programming</p></li>  
              <li className='flex items-start mb-1'><FontAwesomeIcon icon={faArrowRight} size="sm"  className='pt-[5px]'/><p>Computer Organization</p></li>  
              <li className='flex items-start mb-1'><FontAwesomeIcon icon={faArrowRight} size="sm"  className='pt-[5px]'/><p>Operating System Fundamentals</p></li>  
              <li className='flex items-start mb-1'><FontAwesomeIcon icon={faArrowRight} size="sm"  className='pt-[5px]'/><p>Intro. to Logic for Computer Science</p></li>  
              </div>

       </ul>
        </div>
        </div>
        </div>
        <div className='secdivider w-1/3 h-[1px] m-auto mb-[100px]' id="work"></div>
        <div className='m-auto justify-self-auto text-left items-center xs:px-10 px-8'>
            <div className='text-center tit'>
                <h2>Work Experience</h2>
            </div>
                   <div className='max-w-[800px] m-auto py-12'>
          {works.map((work, index) => (
            <Work key={work.id} company={work.company} position={work.position} points={work.points} techstack={work.techstack} link={work.link} className={`${index < (Object.keys(works).length - 1) ? 'pb-16' : ''}`}/>
          ))}
        </div>
        </div>
        <div className='secdivider w-1/3 h-[1px] m-auto mb-[100px]' id="contact"></div>
        <div className='m-auto justify-self-auto text-left items-center xs:px-10 px-8'>
            <div className='text-center tit'>
                <h2>Contact</h2>
            </div>
          <div className='max-w-[1000px] m-auto grid mm:grid-cols-5 sm:grid-cols-2 grid-cols-1 sm:gap-10 pt-12 pb-28 items-start'>
          <div className='col-span-1 mm:col-span-3'>
<div className='justify-end'>
        <form className='grid grid-cols-1 justify-end'>
          <label className='w-full buttf relative my-2 p-2'>
            <div className='border1'></div>
            <div className='border2'></div>
            <input type="text" name="name" placeholder='Name' className='appearance-none w-full focus:outline-none'/>
          </label>
          <label className='w-full buttf relative my-2 p-2'>
            <div className='border1'></div>
            <div className='border2'></div>
            <input type="email" name="email" placeholder='Email' className='appearance-none w-full focus:outline-none'/>
          </label>
          <label className='w-full buttf relative my-2 p-2'>
            <div className='border1'></div>
            <div className='border2'></div>
            <textarea name="text" className="min-h-[100px] appearance-none w-full focus:outline-none" id="message" placeholder="Message"></textarea>
         </label>
         <div className='relative buttf ml-auto my-2 px-16 justify-end buttb'>
         <div className='border1'></div>
            <div className='border2'></div>
            <input type="submit" value="Submit"/>
         </div>
        </form>
        </div>
          </div>
          <div className='tit mm:col-span-2 col-span-1'>
            <h3 className='pb-3'>Connect with Me</h3>
            <div className='flex-wrap flex m-auto gap-2 pb-3'>
            <a href='https://github.com/AlAgilly' className='relative butt buttb'>
            <div className='border1'></div>
            <div className='border2'></div>
            <h5><FontAwesomeIcon icon={faGithub} size={`lg`}/>&nbsp;&nbsp;Github</h5>
          </a>           
            <a href='https://www.linkedin.com/in/lynnalagilly/' className='relative butt buttb'>
            <div className='border1'></div>
            <div className='border2'></div>
            <h5><FontAwesomeIcon icon={faLinkedinIn} size={`lg`}/>&nbsp;&nbsp;LinkedIn</h5>
          </a>
          <a href='mailto:lynn.alagilly@yahoo.ca' className='relative butt buttb'>
            <div className='border1'></div>
            <div className='border2'></div>
            <h5><FontAwesomeIcon icon={faEnvelope} size={`md`}/>&nbsp;&nbsp;Email</h5>
          </a>

            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Home