import React from 'react'
import '/src/CSS/Test.css'
import HomeImage from '/src/assets/images/IMG_1388_newV2.png'
import LogoImage from '/src/assets/images/Dad business logo PROTOTYPE V2.png'
import Nav from '../Components/Nav'

export default function Test() {
  return (
    <>
        <div className='TestMainContainer'>
            <div className='Nav_Test'>
              <Nav />
            </div>
            <div className='InnerImage_Logo'>
              <img src={LogoImage} />
            </div>
            <div className='HomeImageTest'>
              <img src={HomeImage}/>
            </div>
        </div>
    </>
  )
}//<Nav />

/*
import React from 'react'
import '/src/CSS/Test.css'
import HomeImage from '/src/assets/images/IMG_1388_newV2.png'
import LogoImage from '/src/assets/images/Dad business logo PROTOTYPE V2.png'
import Nav from '../Components/Nav'

export default function Test() {
  return (
    <>
        <div className='TestMainContainer'>
        <Nav />
            
            <div className='InnerImage_Logo'>
              <img src={LogoImage} />
            </div>
            <div className='HomeImageTest'>
              <img src={HomeImage}/>
            </div>
        </div>
    </>
  )
}//<Nav />

*/
