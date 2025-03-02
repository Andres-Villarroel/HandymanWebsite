import React from 'react'
import LinkButton from './LinkButton'
import "/src/CSS/UpperBody.css"
import LogoImage from '/src/assets/images/Dad business logo PROTOTYPE V2.png'
import HomeImage from '/src/assets/images/IMG_1388_newV2.png'
import HomePageLinkButton from './HomePageLinkButton'
import Nav from './Nav'
import Home from '../Pages/Home'

function UpperBody() {
  return (
    <div className='UpperBody_Toggle'>
      <Nav />
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
    </div>
  )
}
//<img src={HomeImage} className='HomeImage_UpperBody'/>
export default UpperBody
/* THE ORIGINAL
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
  */

/* VERSION 2
function UpperBody() {
  return (
    <div className='UpperBody_Toggle'>
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
    </div>
  )
}
*/