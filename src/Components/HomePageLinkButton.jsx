import React from 'react'
import { Link } from 'react-router-dom'
import '/src/CSS/HomePageLinkButton.css'

function HomePageLinkButton({Name = 'Button'}) {
    return (
        <>
          <Link to={"/" + Name}>
            <button className='HomePageButton'>
              <span className='HomePageSpan'>{Name}</span>
            </button>
          </Link>
        </>
      )
}

export default HomePageLinkButton