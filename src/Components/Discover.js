import React from 'react'
import './discover.css'
import { Container,Row } from 'react-bootstrap'
import t1 from "../Images/t1.png"
import t2 from "../Images/t2.png"
import t3 from "../Images/t3.png"
import Cards from './Cards'

const Discover = () => {
  return (
    <div className='discover'>
        <Container>
             <h3>Discover Univerce</h3>
             <div className='all-cards'>
                <Row>
                    <Cards img={t1} title="Mission Bongo" para="At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions."/>
                    <Cards img={t2} title="Mission BD" para="At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions."/>
                    <Cards img={t3} title="Mission 11" para="At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions."/>
                </Row>
             </div>
        </Container>

    </div>
  )
}

export default Discover