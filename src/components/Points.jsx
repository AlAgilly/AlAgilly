import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Points = ({
    description
}) => {
    return (
        <>
            <li className={`${description == 'swiftrackclients' ? 'hidden' : 'flex items-start mb-1'}`}><FontAwesomeIcon icon={faArrowRight} size="sm"  className='pt-[5px]'/><p>{description}</p> </li>  
            <li className={`${description == 'swiftrackclients' ? 'flex items-start mb-1' : 'hidden'}`}><FontAwesomeIcon icon={faArrowRight} size="sm"  className='pt-[5px]'/><p>Led deployment and optimization of websites for various clients, including <a href='https://pennyappeal.ca/' target='_blank' rel='noreferrer' className='link'>PennyAppeal</a> and <a href='https://safe-auto.ca/' target='_blank' rel='noreferrer' className='link'>SafeAuto</a>.</p> </li>  

        </>
    )
}

export default Points