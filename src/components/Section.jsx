import React from 'react'
import Divider from './Divider'

const Section = ({
    children,
    title,
    id,
}) => {
  return (
    <>
        <Divider />
        <div className='m-auto justify-self-auto text-left items-center xs:px-10 px-8' id={id}>
            <div className='text-center tit'>
                <h2>{title}</h2>
            </div>
            {children}
        </div>
    </>
  )
}

export default Section