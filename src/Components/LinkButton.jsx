import React from 'react'
import '/src/CSS/LinkButton.css'
import { Link } from 'react-router-dom'

function LinkButton({Name = 'Button'}) {

  return (
    <>
      <Link to={"/" + Name}>
        <button className='ButtonComponent'>
          <span>{Name}</span>
        </button>
      </Link>
    </>
  )
}

export default LinkButton
/*
import React from 'react'
import '/src/CSS/LinkButton.css'
import { Link } from 'react-router-dom'

function LinkButton({Name = 'Button'}) {

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
*/