import React from 'react'
import LinkButton from './LinkButton'
import "/src/CSS/UpperBody.css"

function UpperBody() {
  return (
    <div className='ImageContainer'>
        <div className='ButtonContainer'>
            <LinkButton/>
            <LinkButton/>
            <LinkButton/>
            <LinkButton/>
            <LinkButton/>
        </div>
    </div>
  )
}

export default UpperBody