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

const Projects = () => {
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
        <div className='max-w-[1000px] m-auto justify-self-auto text-left items-center xs:px-10 px-8 my-24'>
        <div className='list-none xm:flex hidden justify-start items-center flex-1 gap-3 pr-20 fott'>
        <NavLink to="/" className={`link2`}>Home</NavLink>/
      </div>
              <h1 className='text-[60px] font-thin'>Projects</h1>

        <div className='m-auto grid sm:grid-cols-5 grid-cols-1 sm:gap-10 items-center pt-12'>
        {project.map((projects, index) => (
          <MiniProjects key={projects.id} title={projects.title} description={projects.description} techstack={projects.techstack} picture={projects.picture} outlineb={projects.outlineb} outlinew={projects.outlinew} live={projects.live} code={projects.code} documentation={projects.documentation} className={`${index < (Object.keys(project).length - 1) ? 'my-3' : 'my-3'}`}/>
        ))}
        {project.map((projects, index) => (
          <MiniProjects key={projects.id} title={projects.title} description={projects.description} techstack={projects.techstack} picture={projects.picture} outlineb={projects.outlineb} outlinew={projects.outlinew} live={projects.live} code={projects.code} documentation={projects.documentation} className={`${index < (Object.keys(project).length - 1) ? 'my-3' : 'my-3'}`}/>
        ))}
        </div>
        </div>

    </div>
  )
}

export default Projects