import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { useRef } from 'react'

// if(toggleSwitch) {

const Navbar = () => {
    const active = "activenav"
    const normal = ""

    const ref = useRef(null);

    const handleClick = () => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <nav className='navv m-auto justify-self-auto text-center py-5 sticky top-0 border-b-[1px] border-[#666] z-50 w-full xm:flex justify-end items-center'>
        <Link to="/" className='items-center text-[20px] font-light text-[#aaa] xm:ml-20 pl-0 xm:text-left text-center'><span className=''>AlAgilly</span>.dev</Link>
        <ul className='list-none justify-end items-center flex-1 gap-3 mm:gap-7 pr-16 mm:pr-20 xm:flex hidden'>
            <li><a onClick={handleClick} className={`${({ isActive }) => isActive ? active : normal}`}>About</a></li>
            <li><NavLink to="work" className={`link2 ${({ isActive }) => isActive ? active : normal}`}>Experience</NavLink></li>
            <li><NavLink to="/" className={`link2 ${({ isActive }) => isActive ? active : normal}`}>Projects</NavLink></li>
            <li><NavLink to="/" className={`link2 ${({ isActive }) => isActive ? active : normal}`}>Contact</NavLink></li>
            <li><NavLink to="/" className={`link2 ${({ isActive }) => isActive ? active : normal}`}>Resume</NavLink></li>
            {/* <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="slider round"></div>
                </label>
            </div> */}
        </ul>
    </nav>
    )
}

export default Navbar