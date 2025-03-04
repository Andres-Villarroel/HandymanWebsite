import React from 'react'
import '/src/CSS/NewUpperBody.css'
import HomeImage from '/src/assets/images/IMG_1388_newV3.png'
import LogoImage from '/src/assets/images/Dad business logo PROTOTYPE V2.png'
import HomePageLinkButton from './HomePageLinkButton'
import Nav from './Nav'
import { Link } from 'react-router-dom'

export default function NewUpperBody() {
  return (
    <div className='NewUpperBody_MainContainer'>
        <div className='NewUpperBody_nav'>
            <Nav />
        </div>

        <div className='NewUpperBody_logo_buttonContainer'>
            <div className='NewUpperBody_logo'>
                <Link to={"/"}>
                    <img src={LogoImage}/>
                </Link>
            </div>

            <div className='NewUpperBody_buttons'>
                <HomePageLinkButton Name='About' />
                <HomePageLinkButton Name='Services' />
                <HomePageLinkButton Name='Gallery' />
                <HomePageLinkButton Name='Contact' />
            </div>  
        </div>

        <div className='NewUpperBody_backgroundImage'>
            <img src={HomeImage} />
        </div>
    </div>
  )
}