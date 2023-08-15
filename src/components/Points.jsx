import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Points = ({
    description
}) => {
    return (
        <li className='flex items-start mb-1'><FontAwesomeIcon icon={faArrowRight} size="sm"  className='pt-1'/><p>{description}</p> </li>  
    )
}

export default Points