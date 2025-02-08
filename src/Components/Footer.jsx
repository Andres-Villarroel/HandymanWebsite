import React from 'react'
import '/src/CSS/Footer.css'
import LogoImage from '/src/assets/images/Dad business logo PROTOTYPE V2.png'
export default function Footer() {
  return (
    <div className='FooterContainer'>
      <img src={LogoImage}/>
        <ul>
            <li>add logo</li>
            <li>navigation links</li>
            <li>service list/links</li>
            <li>contact info</li>
            <li>hours of operation (optional)</li>
        </ul>
    </div>
  )
}
