import React from 'react'
import { Container } from 'react-bootstrap'
import astro from '../Images/astro.png'
import w1 from '../Images/w1.png'
import { Link } from 'react-router-dom'
import './banner.css'
const Banner = () => {
  return (
       <div className='banner'>
         <div className='overlay'> 
         <Container style={{position:"relative"}}>
              <img className='astro' src={astro} />
              <div className='text'>
                <div className='top-text'>
                  <img  src={w1}/>
                  <h4>Welcome to stella</h4>
                </div>
                <h1>SPACE FOR EVERYONE</h1>
                <p> At PIAP Space, we believe that we can make Space and Earth cleaner,
                    engineering, and delivering top-quality robotics solutions. </p>
                <Link to='/contact' className='contact-btn banner-btn'>GET STARED</Link>
              </div>
         </Container>
       </div>
    </div>
  )
}

export default Banner