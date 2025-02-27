import React from 'react'
import '/src/CSS/ServiceCard.css'

export default function ServiceCard({ServiceName='default', ImageName='NoImage.png'}) {
    //const ImageLocation = '/src/assets/images/'.concat(ImageName);  //TODO: add input validation
    const ImageLocation = '/'.concat(ImageName); 
  return (
    //use Dad business logo PROTOTYPE V2.png to test
    <div className='CardContainer'>
        <img src={ImageLocation}/>
        <h3>{ServiceName}</h3>
    </div>
  )
}
