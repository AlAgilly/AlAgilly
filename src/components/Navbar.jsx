import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    const active = "activenav"
    const normal = ""
  return (
    <nav className='navv m-auto justify-self-auto text-center py-5 sticky top-0 border-b-[1px] border-[#666] z-50 w-full xm:flex justify-end items-center'>
        <Link to="/" className='items-center text-[20px] font-light text-[#888] xm:pl-20 pl-0 xm:text-left text-center'><span className=' text-[#000]'>AlAgilly</span>.dev</Link>
        <ul className='list-none justify-end items-center flex-1 gap-3 mm:gap-7 pr-16 mm:pr-20 xm:flex hidden'>
            <li><Link to="about" className={`${({ isActive }) => isActive ? active : normal}`}>About</Link></li>
            <li><NavLink to="work" className={`link2 ${({ isActive }) => isActive ? active : normal}`}>Experience</NavLink></li>
            <li><NavLink to="/" className={`link2 ${({ isActive }) => isActive ? active : normal}`}>Projects</NavLink></li>
            <li><NavLink to="/" className={`link2 ${({ isActive }) => isActive ? active : normal}`}>Contact</NavLink></li>
            <li><NavLink to="/" className={`link2 ${({ isActive }) => isActive ? active : normal}`}>Resume</NavLink></li>
        </ul>
    </nav>
    )
}

export default Navbar