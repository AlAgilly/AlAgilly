import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
// import Home from './pages/Home'
import Home2 from './pages/Home2'
import Old from './pages/Old'

import React, { Component } from 'react';
import { lazy, Suspense } from 'react';
// import Home from './pages/Home';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = lazy(() => import("./pages/Home"))
// const About = lazy(() => import("./pages/About"))
const Projects = lazy(() => import("./pages/Projects"))
const YorkEsports = lazy(() => import("./pages/YorkEsports"))
// const UnderConstruction = lazy(() => import("./pages/UnderConstruction"))
// const NotFound = lazy(() => import("./pages/NotFound"))
// const PastGames = lazy(() => import("./pages/PastGames"))
// const Footer = lazy(() => import("./components/sections/Footer"))

function App() {

  return (

    <Router>
            <Suspense fallback={<h1>Loading...</h1>}>

                <Routes>
                  {/* Completed Pages */}
                  <Route exact path='/' element={< Home />}></Route>
                  <Route exact path='/projects' element={< Projects />}></Route>
                  <Route exact path='/projects/yorkesports' element={< YorkEsports />}></Route>
                  {/* <Route exact path='/contact' element={< Contact />}></Route> */}
                  {/* <Route exact path='/pastgames' element={< PastGames/>}></Route> */}
                  {/* Underconstruction Pages */}

                  {/* 404 Error */}
                  {/* <Route path='*' element={<NotFound />}/> */}
                </Routes>
              </Suspense>
              <nav className='m-auto justify-self-auto text-center py-5 w-full flex justify-end items-center'>
      <p className='items-center font-light text-[#000] pl-20'>Made and designed with ♡ by <Link to="/" className='font-medium'>Lynn Al Agilly</Link></p>
      <div className='list-none xm:flex hidden justify-end items-center flex-1 gap-7 pr-20 fott'>
          <NavLink to="/" className={`link2`}>Terms & Conditions</NavLink>
          <NavLink to="/" className={`link2`}>Contact</NavLink>
      </div>
      </nav>
    </Router>
  );
}

  
export default App