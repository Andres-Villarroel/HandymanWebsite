import React from 'react'
import '/src/CSS/IconCard.css'

function IconCard({ImageName='NoImage.png', Name='Default', Description='Default'}) {
    const ImageLocation = '/src/assets/images/'.concat(ImageName);  //TODO: add input validation

  return (
    <>
        <div className='IconCardMainContainer'>
            <img src={ImageLocation}/>
            <div className='IconCardTextContainer'>
                <p className='Name_IconCard'>{Name}</p>
                <p className='Description_IconCard'>{Description}</p>
            </div>
        </div>
    </>
  )
}

export default IconCard