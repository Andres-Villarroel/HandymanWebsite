import React from 'react'
import '/src/CSS/LinkButton.css'
import { Link } from 'react-router-dom'

function LinkButton({Name = 'Button'}) {
//REMINDER: add props for button name and link to page

  return (
    <>
      <Link to={"/" + Name}>
        <button className='ButtonComponent'>
          {Name}
        </button>
      </Link>
    </>
  )
}

export default LinkButton