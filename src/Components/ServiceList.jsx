import React from 'react'
import '/src/CSS/ServiceList.css'

export default function ServiceList() {
  return (
    <div className='ListContainer'>
      <div className='StyledHeaderContainer'>
        <div className='HeaderBorder'></div>
        <h2 className='HeaderStyle'>Services Offered</h2>
      </div>
      <ul className='ServiceListUL'>
          <li>Drywall Installation</li>
          <li>Drywall Repair</li>
          <li>Tile flooring</li>
          <li>Interior Painting</li>
          <li>Exterior Painting</li>
          <li>Deck Building</li>
          <li>Deck Repair</li>
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
