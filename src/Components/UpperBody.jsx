import React from 'react'
import LinkButton from './LinkButton'
import "/src/CSS/UpperBody.css"
import LogoImage from '/src/assets/images/Dad business logo PROTOTYPE V2.png'
import HomePageLinkButton from './HomePageLinkButton'

function UpperBody() {
  return (
    <div className='ImageContainer'>
        <div className='GradientContainer'>
          <div className='logoContainer'>
            <img src={LogoImage}/>
          </div>
            <div className='ButtonContainer_UpperBody'>
                <HomePageLinkButton Name='About' />
                <HomePageLinkButton Name='Services' />
                <HomePageLinkButton Name='Gallery' />
                <HomePageLinkButton Name='Contact' />
            </div>
        </div>
    </div>
  )
}

export default UpperBody