import React from 'react'
import '/src/CSS/LinkButton.css'

function LinkButton({Name = 'Button'}) {
//REMINDER: add props for button name and link to page

  return (
    <button className='ButtonComponent'>
        {Name}
    </button>
  )
}

export default LinkButton