import React from 'react'
import LinkButton from './LinkButton'
import "/src/CSS/UpperBody.css"

function UpperBody() {
  return (
    <div className='ImageContainer'>
        <div className='GradientContainer'>
            <div className='ButtonContainer'>
                <LinkButton Name='Home' />
                <LinkButton Name='About' />
                <LinkButton Name='Services' />
                <LinkButton Name='Gallary' />
                <LinkButton Name='Contact' />
                <LinkButton Name='FAQ' />
            </div>
        </div>
    </div>
  )
}

export default UpperBody