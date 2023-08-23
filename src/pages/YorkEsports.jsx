import React from 'react'
import { screenshot1, yorkb, yorkm, yorkm2, yorkw } from '../assets'
import { NavLink, useLocation} from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCode } from '@fortawesome/free-solid-svg-icons'
import Code from '../components/Code'

const YorkEsports = () => {

//   const locationp = useLocation();
//   useEffect(() => {
//     // Scroll top when location changes
//     window.scrollTo(0, 0);
//   }, [locationp]);

  return (
    <div className='App'>
        <div className='max-w-[1000px] m-auto justify-self-auto text-left items-center xs:px-10 px-8 my-24'>
            <div className='list-none flex justify-start items-center flex-1 gap-3 pr-20 fott'>
                <NavLink to="/" className={`link2`}>Home</NavLink>/
                <NavLink to="/projects" className={`link2`}>Projects</NavLink>/
            </div>
            <h1 className='text-[60px] font-thin'>York Gaming & Esports</h1>
            <div className='m-auto sm:gap-10 items-center pt-12'>
                <div className='tit mb-2 sm:flex hidden'>
                    <h2>Overview</h2>
                </div>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-7 justify-center items-start'>
                    <div>
                    <div className='tit mb-2 sm:hidden flex'>
                    <h2>Overview</h2>
                </div>
                        <div className='divider w-full h-[1px] pb-3'></div>
                        <p className=''>The York Gaming & Esports (YGE) website is a platform designed specifically for the members of York University&apos;s official Gaming and Esports Club, potential members, and sponsors. Using React, Tailwind, and Express, the website serves as a central hub for accessing information; everthing from upcoming/past games and events to teams and more. It was created and tested with a small team of designers and developers within the club over the course of a year.</p>
                        {/* <p className=''>The York Gaming and Esports website is a vibrant online hub established as part of the York Gaming and Esports Club, dedicated to enriching the gaming and esports culture within York University. Launched last year, this platform serves as a comprehensive resource for both current and potential members, sponsors, and fellow gaming organizations. The main objectives of this project include providing up-to-date event information, showcasing teams and players, displaying tournament results, announcing upcoming games, and offering a place to immerse oneself in the thriving world of the club.</p> */}
                    </div>
                    <div className='max-w-[500px] m-auto order-first sm:order-last'>
                        <a href="{live}" rel="noreferrer" target='_blank' className={`inline`}>
                            <div className='relative butti m-auto w-full'>
                                <img src={screenshot1} alt="" className='im2'/>
                                <img src={yorkb} alt="" className='im1b'/>
                                <img src={yorkw} alt="" className='im1w'/>
                            </div>
                        </a>
                        <div className='grid grid-cols-2 mt-3 m-auto justify-center'>
                            <div className={`inline-block lefty text-right pr-5`}><FontAwesomeIcon icon={faLink} size="sm" /><a href="{live}" rel="noreferrer" target='_blank' className='link ml-2'>Live Preview</a></div>
                            <div className={`inline-block pl-5`}><FontAwesomeIcon icon={faCode} size="sm"/><a href="{code}" rel="noreferrer" target='_blank' className='link ml-2'>Code</a></div>
                        </div>
                    </div>
                </div>
                <div className='tit mt-10 mb-2'>
                    <h2>Description</h2>
                </div>
                <div className='divider w-full h-[1px] pb-3'></div>
                {/* <p className=''>This website is an instrumental tool in fostering community engagement and participation within York University's gaming and esports sphere. It plays a pivotal role in contributing to the school's dynamic gaming scene. The platform extends a warm invitation to enthusiasts to become more deeply involved in the club's activities and events. With a user-centered approach, the website caters to a diverse audience, from seasoned players to newcomers eager to explore the esports landscape. By effectively melding information, interactivity, and aesthetics, York Gaming and Esports paves the way for a more inclusive and collaborative gaming community.</p> */}
                <p className=''>YGE is a club at York University dedicated bring gamers of all genres together. Our website is designed to provide valuable insights and information, making it easier for individuals to engage with the club. Through our website, visitors can gain a deeper understanding of upcoming events, access profiles of our talented teams and players, explore past tournament results, and stay up-to-date with the latest club news. The mobile friendly website is designed and optimized with ease of access & user experience being our top priority.</p>
                <div className='tit mt-10 mb-2'>
                    <h2>Features</h2>
                </div>
                <div className='divider w-full h-[1px] pb-3'></div>

            <div className='grid ss:grid-cols-2 grid-cols-1 gap-3'>
                <p className='tit pb-3'>
                    <h4>Team and Player Showcase:</h4>
                    This website provides a comprehensive look at the talented teams and players that represent York University, highlighting their achievements and in-game accomplishments.
                </p>
                <p className='tit pb-3'>
                    <h4>Scores and Game Times:</h4>
                    Keeping the community in the loop, the website displays our club&apos;s past tournament scores and schedules for upcoming matches.
                </p>
                <p className='tit pb-3'>
                    <h4>Events at a Glance:</h4>
                    Users can seamlessly view and access details about past and upcoming events, ensuring they never miss out on exciting Chill Nites or community tournaments.
                </p>
                <p className='tit pb-3'>
                    <h4>Club Staff and Documents:</h4>
                    Get to know the dedicated individuals who drive the club&apos;s success and easily access official documents that provide insight into the club&apos;s activities and future plans.
                </p>
            </div>
            <div className='tit mt-10 mb-2'>
                <h2>Tech Stack</h2>
            </div>
            <div className='divider w-full h-[1px] pb-3'></div>
            {/* <p className='pb-3'>When I first started developing this website, I wanted to use it as an opportunity to learn so I decided to use a tech stack I've never worked with before because <i>how hard could it be?</i> I've heard the term <i>MERN</i> a few times in the past and settled on starting with React (with no JavaScript knowledge at the time). After learning JS, React, and Tailwind (as suggested by a plethora of online tutorials), I had a fully functional static website within a less than a month! I later realized I needed a back end server to grab all the data from our club's Notion workspace which is when Express was added to the roster.</p> */}
            <p className='pb-3'>This website actually consists of two separate web apps; the client side application (using React and TailwindCSS) and the server side application (using Express and <a href="https://developers.notion.com/" className='link'>NotionAPI</a>). The server side app (what i refer to as the back end) fetches data from Notion; hourly for event and tournament times & dates and daily for staff, player and team information using a <a href="https://crontab.guru/" className='link'>Cron scheduler</a>. Once the data is fetched, their respective files are updated and pushed to the web. From there, the client side app (front end) grabs the required data when needed using <a href="https://axios-http.com/docs/intro" className='link'>Axios</a> and populates the website using reusable components.</p>
            <div className='grid grid-cols-3 gap-10'>
                <div className='tit'>
                    <h4>Front End</h4>
                    <div className='flex-wrap flex m-auto gap-2 pb-3 mt-3'>
                        <Code language="JavaScript"/> 
                        <Code language="React"/> 
                        <Code language="NodeJS"/> 
                        <Code language="HTML"/> 
                        <Code language="CSS"/> 
                        <Code language="TailwindCSS"/> 
                    </div>
                </div>
                <div className='tit'>
                    <h4>Back End</h4>
                    <div className='flex-wrap flex m-auto gap-2 pb-3 mt-3'>
                        <Code language="JavaScript"/> 
                        <Code language="NodeJS"/> 
                        <Code language="Express"/> 
                        <Code language="NotionAPI"/> 
                        <Code language="InstagramAPI"/> 
                    </div>
                </div>
                <div className='tit'>
                    <h4>Other Tools/Tech</h4>
                    <div className='flex-wrap flex m-auto gap-2 pb-3 mt-3'>
                        {/* <Code language="JavaScript"/>  */}
                        <Code language="Digital Ocean"/> 
                        <Code language="Git"/> 
                    </div>
                </div>
            </div>
            <div className='tit mt-10 mb-2'>
                <h2>Design & Architecture</h2>
            </div>
            <div className='divider w-full h-[1px] pb-3'></div>
            {/* <div className='grid grid-cols-2 gap-7 items-start pb-3 '> */}
            <div className='flex flex-inline gap-7 items-start pb-3 w-full'>
                <div className='flex-1 w-1/2 bb'>
                    <a href="{live}" rel="noreferrer" target='_blank' className={`inline`}>
                        <div className='relative butti m-auto w-full'>
                            <img src={yorkm2} alt="" className='im2'/>
                            <img src={yorkm} alt="" className='im1b'/>
                            <img src={yorkm2} alt="" className='im1w'/>
                        </div>
                    </a>
                </div>
                <p className='flex-1'>The visual aspect of the website is a testament to the collaborative efforts of our club&apos;s skilled UI/UX designers. Their design expertise has been expertly translated into a captivating user interface that navigates smoothly and intuitively bringing the perfect balance between aesthetics and functionality. A huge goal we wanted to accomplish when designing the website was user accessability and an intuitive design aswe wanted to make it easy for any user to navigate the website seamlessly on any screen.</p>
                <p>The intuitive user interface welcomes visitors with an immersive experience that encourages exploration. The website&apos;s architecture seamlessly integrates the frontend and backend technologies, ensuring that data flows effortlessly to provide real-time information to users. Through thoughtful layout design, intuitive navigation, and a vibrant color palette, the platform captures the energetic spirit of gaming and esports. Add something here about mobile responsiveness and accessibility. While the design team shaped the project&apos;s aesthetic, my main role was to bring their vision to life. My experience in development and implementation transformed design concepts into interactive reality, ensuring that every click and interaction resonates with the club&apos;s goals and the community it serves.</p>

            </div>
            <div className='tit mt-10 mb-2'>
                <h2>Development Process</h2>
            </div>
            <div className='divider w-full h-[1px] pb-3'></div>

            <p className=''>The development of the York Gaming and Esports platform was a journey marked by innovation and collaboration. Following agile methodologies, the project evolved through iterative cycles that embraced continuous improvement. From initial ideation to feature implementation, your technical expertise and dedication played a crucial role in transforming concepts into tangible results. Rigorous testing and quality assurance measures were applied at each stage to guarantee a seamless user experience and the platform&apos;s overall reliability.</p>
            <div className='tit mt-10 mb-2'>
                <h2>Challenges & Solutions</h2>
            </div>
            <div className='divider w-full h-[1px] pb-3'></div>

            <p className=''>The path to creating the York Gaming and Esports platform was not without its challenges. Integrating data from multiple sources while maintaining synchronization presented intricacies that demanded innovative solutions. The dynamic nature of event information required seamless updates, which were achieved through efficient integration with the Notion API. The collaboration between development and design teams required effective communication channels to ensure that the final product aligned with the intended vision.</p>
            <div className='tit mt-10 mb-2'>
                <h2>Code Snippets</h2>
            </div>
            <div className='divider w-full h-[1px] pb-3'></div>

            <p className=''>hello</p>
             <div className='tit mt-10 mb-2'>
                <h2>Screenshots & Demos</h2>
            </div>
            <div className='divider w-full h-[1px] pb-3'></div>

            <p className=''>hello</p>
            <div className='tit mt-10 mb-2'>
                <h2>Testing and QA</h2>
            </div>
            <div className='divider w-full h-[1px] pb-3'></div>

            <p className=''>To ensure a seamless user experience, comprehensive testing methodologies were employed. From unit tests that validate individual components to end-to-end testing simulating user interactions, each element of the platform underwent rigorous evaluation. User feedback and beta testing played an integral role in identifying and rectifying potential issues, resulting in a polished final product that meets the high standards expected by the gaming and esports community.</p>
            <div className='tit mt-10 mb-2'>
                <h2>Performance Optimization</h2>
            </div>
            <div className='divider w-full h-[1px] pb-3'></div>

            <p className=''>Efficient performance is paramount for a platform of this nature. Techniques such as code minification, image optimization, and lazy loading were implemented to enhance loading times and overall responsiveness. Through continuous monitoring and performance profiling, the platform&apos;s speed and efficiency were fine-tuned to ensure a smooth experience, even during high-traffic periods.</p>
            <div className='tit mt-10 mb-2'>
                <h2>Lessons Learned</h2>
            </div>
            <div className='divider w-full h-[1px] pb-3'></div>

            <p className=''>The journey of developing the York Gaming and Esports platform offered invaluable insights. Collaboration, clear communication, and the synergy between design and development emerged as key pillars of success. Navigating technical challenges deepened problem-solving skills, while adhering to user-centered design principles reinforced the importance of putting the community&apos;s needs at the forefront. The project highlighted the significance of adaptability in the face of evolving requirements and the rewards of persisting through complexities to achieve a polished, user-friendly platform.</p>
            <div className='tit mt-10 mb-2'>
                <h2>Contributions and Team Collaboration</h2>
            </div>
            <div className='divider w-full h-[1px] pb-3'></div>

            <p className=''>The realization of the York Gaming and Esports platform was a collective effort that underscores the power of teamwork. The collaboration between UI/UX designers, developers, and other stakeholders was instrumental in shaping the project&apos;s trajectory. While the design team brought creative concepts to life, your role in translating these ideas into functional code solidified the platform&apos;s foundation. The synergy between various skillsets fostered an environment of innovation, resulting in a platform that seamlessly combines visual appeal with dynamic functionality.</p>
            <div className='tit mt-10 mb-2'>
                <h2>Future Enhancements</h2>
            </div>
            <div className='divider w-full h-[1px] pb-3'></div>

            <p className=''>As the gaming and esports landscape continues to evolve, so too does the potential of the York Gaming and Esports platform. Future enhancements could encompass a broader range of interactive features, such as user profiles, event RSVPs, live streaming integration, and a community forum. Integrating data analytics could provide valuable insights into user engagement, allowing for more informed decisions in tailoring the platform to meet the ever-changing needs of the community.</p>
            <div className='tit mt-10 mb-2'>
                <h2>Acknowledgments</h2>
            </div>
            <div className='divider w-full h-[1px] pb-3'></div>

            <p className=''>The creation of the YGE website was made possible through the guidance, support, and inspiration of numerous individuals and resources. Heartfelt appreciation goes to the York Gaming and Esports Club, whose vision laid the groundwork for this project. Gratitude is extended to the UI/UX designers whose creative prowess shaped the platform&apos;s aesthetics, as well as to the community members whose feedback helped refine the user experience.</p>
            <div className='tit mt-10 mb-2'>
                <h2>Links & Resources</h2>
            </div>
            <div className='divider w-full h-[1px] pb-3'></div>

            <p className='pb-1'><a className='link' href='#'>Visit York Gaming and Esports</a></p>
            <p className='pb-1'><a className='link' href='#'>GitHub Repository</a></p>
            <p className='pb-1'><a className='link' href='#'>Figma Design Files</a></p>
            <div className='tit mt-10 mb-2'>
                <h2>Contact Information</h2>
            </div>
            <div className='divider w-full h-[1px] pb-3'></div>

            <p className='pb-3'>Your feedback, questions, and engagement are highly valued. If you have any inquiries, suggestions, or simply want to connect with the team behind York Gaming and Esports, please feel free to reach out to us:</p>
            <p className='pb-1'>Email: <a className='link' href='#'>contact@yorkunigaming.com</a></p>
            <p className='pb-1'>Twitter: <a className='link' href='#'>@YorkUniGaming</a></p>
            <p className='pb-1'>Instagram: <a className='link' href='#'>@YorkUniGaming</a></p>
            <p>LinkedIn: <a className='link' href='#'>York Gaming and Esports</a></p>
        </div>
        </div>
    </div>
  )
}

export default YorkEsports