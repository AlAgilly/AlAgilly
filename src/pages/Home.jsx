import React from 'react'
import { github, screenshot1, screenshot2, screenshot3, screenshot4 } from '../assets'
import {Link, NavLink, useLocation} from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faGithub, faLinkedin, faLinkedinIn, faSquareTwitter, faTwitter, faJsSquare, faJava, faHtml5, faCss3, faPython, faLinux, faGit, faReact, faNode, faNodeJs, faAws, faDigitalOcean, faVuejs, faJira } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope, faEnvelope, faE, faChartLine, faDatabase, faLink, faCode, faInfo, faBook, faFile, faFileAlt, faArrowUpRightFromSquare, faCutlery, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import HoverImage from '../components/HoverImage'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import Projects from '../components/Projects'
import { fullstack, project, works } from '../constants'
import Code from '../components/Code'
import Work from '../components/Work'
import Navbar from '../components/Navbar'
import Divider from '../components/Divider'
import Section from '../components/Section'

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
  return (
    <div className='App'>
      <Navbar/>
      <div className='max-w-[1000px] m-auto justify-self-auto text-center items-center pt-20 pb-24 xs:px-10 px-4'>
        <h1 className='text-[70px] font-thin'>Lynn Al&nbsp;Agilly</h1>
        <h3 className='pt-3'>Space Engineering Student | Web Developer</h3>
        <div className='grid grid-cols-3 xm:w-1/2 w-full m-auto items-center pt-2'>
          <a href="" className='m-auto link2'>Github</a>
          <a href="" className='m-auto link2'>LinkedIn</a>
          <a href="" className='m-auto link2'>Email</a>
        </div>
        <div className='grid xs:grid-cols-2 grid-cols-1 xm:w-1/2 w-full m-auto gap-6 pt-8'>
          <a href='#' className='w-full relative butt buttb'>
            <div className='border1'></div>
            <div className='border2'></div>
            <h5>View Projects</h5>
          </a>
          <a href='#' className='w-full relative butt buttb'>
            <div className='border1'></div>
            <div className='border2'></div>
            <h5>Download Resume</h5>
          </a>
        </div>
      </div>
      <Section title="About" id="about">
        <div className='max-w-[1000px] m-auto grid mm:grid-cols-5 sm:grid-cols-2 grid-cols-1 sm:gap-10 py-12 items-center'>
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
      </Section>
      <Section title="Education" id="edu">
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
      </Section>
      <Section title="Work Experience" id="work">
        <div className='max-w-[800px] m-auto py-12'>
          {works.map((work, index) => (
            <Work key={work.id} company={work.company} position={work.position} points={work.points} techstack={work.techstack} link={work.link} className={`${index < (Object.keys(works).length - 1) ? 'pb-16' : ''}`}/>
          ))}
        </div>
      </Section>
      <Section title="Projects & Work" id="projects">

        <div className=' max-w-[1000px] m-auto grid sm:grid-cols-5 grid-cols-1 sm:gap-10 items-center pt-12'>
        {project.map((projects, index) => (
          <Projects key={projects.id} title={projects.title} description={projects.description} techstack={projects.techstack} picture={projects.picture} outline={projects.outline} live={projects.live} code={projects.code} documentation={projects.documentation} className={`${index < (Object.keys(project).length - 1) ? 'my-3' : 'my-3'}`}/>
        ))}
        </div>
        <div className='text-center tit py-12'>
          <h3><a href='#' className='link'>View all Projects</a></h3>
        </div>
    </Section>
    <Section title="Contact" id="work">

    <div className='max-w-[800px] m-auto grid sm:grid-cols-3 grid-cols-1 sm:gap-10 items-center pt-12 pb-20 text-center'>
        {/* <div className='col-span-3 justify-start'>
        <form className='grid grid-cols-1 justify-start'>
          <label className='w-full buttf relative my-2'>
            <div className='border1'></div>
            <div className='border2'></div>
            <input type="text" name="name" placeholder='Name' className='appearance-none w-full focus:outline-none text-[#000]'/>
          </label>
          <label className='w-full buttf relative my-2 min-h-[100px]'>
            <div className='border1'></div>
            <div className='border2'></div>
            <textarea name="text" className="appearance-none w-full focus:outline-none" id="message" placeholder="Message"></textarea>
         </label>
         <div className='relative buttf mr-auto px-16 justify-start buttb'>
         <div className='border1'></div>
            <div className='border2'></div>
            <input type="submit" value="Submit"/>
         </div>
        </form>
        </div> */}
        <div className='relative butt'>
        <div className='border1'></div>
            <div className='border2'></div>
          <h4>Connect with me!</h4>
        </div>
        <div className='relative butt'>
        <div className='border1'></div>
            <div className='border2'></div>
          Email Me!
        </div>
        <div className='relative butt'>
        <div className='border1'></div>
            <div className='border2'></div>
          hello
        </div>
      </div>
</Section>
      <nav className='m-auto justify-self-auto text-center py-5 w-full flex justify-end items-center'>
      <p className='items-center font-light text-[#000] pl-20'>Made and designed with ♡ by <Link to="/" className='font-medium'>Lynn Al Agilly</Link></p>
      <div className='list-none xm:flex hidden justify-end items-center flex-1 gap-7 pr-20 fott'>
          <NavLink to="/" className={`link2`}>Terms & Conditions</NavLink>
          <NavLink to="/" className={`link2`}>Contact</NavLink>
      </div>
      </nav>
    </div>
  )
}

export default Home