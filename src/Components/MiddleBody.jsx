//rfce
import React from 'react'
import ServiceList from './ServiceList'
import '/src/CSS/MiddleBody.css'
import ReactCompareImage from 'react-compare-image'
import beforeImg from '/src/assets/images/before.jpeg'
import afterImg from '/src/assets/images/after.jpeg'

export default function MiddleBody() {
  return (
    <>
        <div className='MainContainer_MiddleBody'>
            <div className='AboutMeContainer'>
              <div className='AboutMePositionContainer'>
                <div className='ImageCompare'>
                  <ReactCompareImage leftImage={beforeImg} rightImage={afterImg}/>
                </div>
                <div className='Header_paragraph'>
                  <h2 className='AboutMeTitleHeader'>Villarroel Remodeling</h2>
                  <p className='AboutMeParagraph'>With 20 years of hands-on experience, I’ve tackled everything from replacing water heaters to remodeling entire kitchens. 
                      I take pride in delivering quality craftsmanship, reliable service, and attention to detail on every job, big or small. 
                      Whether you need minor repairs or a full renovation, I bring the skills and expertise to get it done right.
                  </p>
                </div>
              </div>
            </div>
            <ServiceList />
        </div>
    </>
  )
}

