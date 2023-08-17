import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faJava, faHtml5, faCss3, faPython, faLinux, faGit, faReact, faNodeJs, faAws, faDigitalOcean, faVuejs, faJira } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faDatabase, faE } from '@fortawesome/free-solid-svg-icons'

const SIZES = ['medium', 'large'];

const Code = ({
    language,
    size,
}) => {
    const checkButtonSize = SIZES.includes(size) ? size : SIZES[0];
    let icon = ''
    switch(language) {
        case 'JavaScript':
            icon = faJsSquare;
            break;
        case 'Python':
            icon = faPython;
            break;
        case 'HTML':
            icon = faHtml5;
            break;
        case 'React':
            icon = faReact;
            break;
        case 'NodeJS':
            icon = faNodeJs;
            break;
        case 'Express':
            icon = faE;
            break;
        case 'CSS':
            icon = faCss3;
            break;
        case 'Digital Ocean':
            icon = faDigitalOcean;
            break;
        case 'Git':
            icon = faGit;
            break;
        case 'Java':
            icon = faJava;
            break;
        case 'MongoDB':
            icon = faDatabase;
            break;
        case 'AWS':
            icon = faAws;
            break;
        case 'Matlab':
            icon = faHtml5;
            break;
        case 'Jira':
            icon = faJira;
            break;
        case 'mySQL':
            icon = faDatabase;
            break;
        case 'VueJS':
            icon = faVuejs;
            break;
        case 'Linux':
            icon = faLinux;
            break;
        case 'Typescript':
            icon = faJsSquare;
            break;
        default:
            icon = language.includes('API') ? faArrowUpRightFromSquare : '';

    }
    return (
        <div className={`relative ${checkButtonSize == 'medium' ? 'butt': 'butt'}`}>
            <div className='border1'></div>
            <div className='border2'></div>
            <p><FontAwesomeIcon icon={icon} size={`${icon == faArrowUpRightFromSquare ? 'sm' : 'lg'}`}/><span className={`${icon ? 'flex-inline' : 'hidden'}`}>&nbsp;&nbsp;</span>{language}</p>
        </div>
    )
}

export default Code