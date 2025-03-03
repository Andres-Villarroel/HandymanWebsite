import React from 'react'
import '/src/CSS/Footer.css'
import LogoImage from '/src/assets/images/Dad business logo PROTOTYPE V2.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div className='FooterMainContainer'>

        <div className='FooterContainer'>
          <div className='Section1'>
              <Link to={"/"}>
                <img src={LogoImage}/>
              </Link>
            <h3>Proudly serving the D.C., Maryland, Virginia area</h3>
            <h4>703-505-8784</h4>
          </div>

          <div className='Section2'>
            <h2>Site Navigation</h2>
            <ul>
              <li><Link to={"/"}><button>Home</button></Link></li>
              <li><Link to={"/About"}><button>About</button></Link></li>
              <li><Link to={"/Services"}><button>Services</button></Link></li>
              <li><Link to={"/Gallery"}><button>Gallery</button></Link></li>
              <li><Link to={"/Contact"}><button>Contact</button></Link></li>
            </ul>
          </div>

          <div className='Section3'>
            <h2>Services</h2>
            <ul>
              <li>Drywall Installation</li>
              <li>Tile Flooring</li>
              <li>Deck Building</li>
              <li>Deck Repair</li>
              <li>Basic Electrical Work</li>
              <li>Remodeling</li>
              <li>General Repairs</li>
              <li>more...</li>
            </ul>
          </div>
        </div>

        <p className='FooterAuthor'>Website built by: Andres Villarroel</p>

      </div>
    </>
  )
}
