import React from 'react'
import { Container,Form, Button,FormControl } from 'react-bootstrap'
import './layout.css'
import headerLogo from '../Images/headerLogo.png'
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF,FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
             <div className='items'>
             <h1>Newsletter</h1>
             <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Email Address"
                        />
                        <Button variant="outline-success">Subscribe</Button>
              </Form>
             </div>
             <div className='footer-bottom'>
              <div className='logo'>
                 <img src={headerLogo}/>
              </div>
              <p>Space 2020, All rights reserved.</p>
              <div className='icons'>
              <BsTwitter/>
              <FaFacebookF/>
              <FaLinkedinIn/>
              </div>
             </div>
      </Container>

    </div>
  )
}

export default Footer