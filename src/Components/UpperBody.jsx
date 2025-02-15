import React from 'react'
import LinkButton from './LinkButton'
import "/src/CSS/UpperBody.css"
import LogoImage from '/src/assets/images/Dad business logo PROTOTYPE V2.png'

function UpperBody() {
  return (
    <div className='ImageContainer'>
        <div className='GradientContainer'>
          <div className='logoContainer'>
            <img src={LogoImage}/>
          </div>
            <div className='ButtonContainer'>
                
                <LinkButton Name='About' />
                <LinkButton Name='Services' />
                <LinkButton Name='Gallery' />
                <LinkButton Name='Contact' />
            </div>
        </div>
    </div>
  )
}

export default UpperBody
//<LinkButton Name='Home' />