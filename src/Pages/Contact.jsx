import React from 'react'
import '/src/CSS/Contact.css'
import NavigationBar from '../Components/NavigationBar'
import IconCard from '../Components/IconCard'

export default function Contact() {
  return (
    <>
    <title>Contact</title>
    <NavigationBar />
      <div className='MainContainer_Contact'>
        <h1>Contact Information</h1>

          <p>For emergency services please call me</p>
          <div className='CardContainer_Contact'>
            <IconCard ImageName='phoneIcon.svg' Name='Phone' Description='703-505-8784'/>
            <IconCard ImageName='emailIcon.svg' Name='Email' Description='villarroelremodeling@gmail.com'/>
          </div>
      </div>
    </>
  )
}
/*
<h2>Please feel free to contact me</h2>
          <p>Phone: 703 505 8784 <br/>
          Email: villarroelremodeling@gmail.com
          </p>
*/