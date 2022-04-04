import React from 'react'
import { Container,Form, Button,FormControl } from 'react-bootstrap'
import './layout.css'
import headerLogo from '../Images/headerLogo.png'
import icons from '../Images/icons.png'
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
              <img className='icons' src={icons}/>
             </div>
      </Container>

    </div>
  )
}

export default Footer