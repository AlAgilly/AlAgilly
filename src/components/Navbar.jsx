import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    const active = "activenav"
    const normal = ""
  return (
    <nav className='navv m-auto justify-self-auto text-center py-5 sticky top-0 border-b-[1px] border-[#666] z-50 w-full flex justify-end items-center'>
        <Link to="/" className='items-center text-[20px] font-light text-[#888] pl-20'><span className=' text-[#000]'>AlAgilly</span>.dev</Link>
        <ul className='list-none xm:flex hidden justify-end items-center flex-1 gap-7 pr-20'>
            <li><Link to="about" className={`${({ isActive }) => isActive ? active : normal}`}>About</Link></li>
            <li><NavLink to="work" className={`link ${({ isActive }) => isActive ? active : normal}`}>Experience</NavLink></li>
            <li><NavLink to="/" className={`link ${({ isActive }) => isActive ? active : normal}`}>Projects</NavLink></li>
            <li><NavLink to="/" className={`link ${({ isActive }) => isActive ? active : normal}`}>Contact</NavLink></li>
            <li><NavLink to="/" className={`link ${({ isActive }) => isActive ? active : normal}`}>Resume</NavLink></li>
        </ul>
    </nav>
    )
}

export default Navbar