import React from 'react'
import '/src/CSS/ServiceList.css'

export default function ServiceList() {
  return (
    <div className='ListContainer'>
      <div className='StyledHeaderContainer'>
        <div className='HeaderBorder'></div>
        <h2 className='HeaderStyle'>Services Offered</h2>
      </div>
      <ul>
          <li>Drywall Installation</li>
          <li>Drywall Repair</li>
          <li>Electrical Work</li>
          <li>Tile flooring</li>
          <li>Interior Painting</li>
          <li>Exterior Painting</li>
          <li>Deck and Porch installation and repairs</li>
          <li>Bathroom Repairs</li>
          <li>General Repairs</li>
          <li>Plumbing</li>
          <li>Remodeling</li>
          <li>Fence Building</li>
          <li>Basic Electrical Work</li>
          <li>Hardwood flooring</li>
          <li>more...</li>
      </ul>
    </div>
  )
}
