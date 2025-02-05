//rfce
import React from 'react'
import ServiceList from './ServiceList'
import '/src/CSS/MiddleBody.css'

export default function MiddleBody() {
  return (
    <>
        <div className='MainContainer'>
            <div className='AboutMeContainer'>
              <h2 className='AboutMeTitleHeader'>Villarroel Remodeling</h2>
              <p className='AboutMeParagraph'>With 20 years of hands-on experience, I’ve tackled everything from replacing water heaters to remodeling entire kitchens. 
                  I take pride in delivering quality craftsmanship, reliable service, and attention to detail on every job, big or small. 
                  Whether you need minor repairs or a full renovation, I bring the skills and expertise to get it done right.
              </p>
            </div>
            <ServiceList />
        </div>
    </>
  )
}

