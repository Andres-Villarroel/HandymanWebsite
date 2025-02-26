import React from 'react'
import '/src/CSS/NavigationBar.css'
import LogoImage from '/src/assets/images/Dad business logo PROTOTYPE V2.png'
import { Link } from 'react-router-dom'
import LinkButton from '/src/Components/LinkButton.jsx'

function NavigationBar() {
  return (
    <div className='NavigationBarMainContainer'>
      <div className='NavBarColorBar_One'/>
      <div className='NavBarColorBar_Two'/>
      <div className='NavButtonContainer'>
        <LinkButton Name="About"/>
        <LinkButton Name="Services"/>
        <Link to={"/"}>
            <img src={LogoImage}/>
        </Link>
        <LinkButton Name="Gallery"/>
        <LinkButton Name="Contact"/>
      </div>
    </div>
  )
}

export default NavigationBar