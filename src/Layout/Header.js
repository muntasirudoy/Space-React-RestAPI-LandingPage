import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import headerLogo from '../Images/headerLogo.png'
import './layout.css'


const Header = () => {
  return (
   <div className='header'>
    <Container>
      <div className='items'>
          <div className='logo'>
            <img src={headerLogo}/>
          </div>
          <div className='menu_contact'>
             <ul>
               <li> <Link to='/' className='active'>Home</Link> </li>
               <li> <Link to='/aboutus'>About us</Link> </li>
               <li> <Link to='/story'>Story</Link> </li>
               <li> <Link to='/blog'>Blog</Link> </li>
             </ul>
             <Link to='/blog' className='contact-btn'>Contact</Link>
          </div>
          
      </div>
    </Container>
  </div>
  )
}

export default Header