import React from 'react'
import { Col } from 'react-bootstrap'
const Cards = ({title,para,img,md,lg,sm,rcard,rcardh,rcardm}) => {
  return (


            <Col lg={lg} sm={sm} md={md}> 
              <div className="ucard" style={{padding:rcard, height:rcardh, marginTop:rcardm}}>
                <img src={img} />  
                <h4>{title}</h4>
                <p>{para}</p>
              </div>
            </Col>


  )
}

export default Cards