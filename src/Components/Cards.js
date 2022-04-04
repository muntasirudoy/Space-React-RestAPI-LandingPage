import React from 'react'
import { Col } from 'react-bootstrap'
const Cards = ({title,para,img,md,lg,sm,rcard,rcardh,rcardm,upcome,lYear,rName,rcardb}) => {


  return (


            <Col lg={lg} sm={sm} md={md}> 
              <div className="ucard" style={{padding:rcard, height:rcardh, marginTop:rcardm}}>
                <img src={img} />  
                <div>
                <h4 style={{marginBottom:rcardb}}>{title}</h4>
                {para ? <p>{para}</p> : "" }
                {rName ? <p className='fpara'>Rocket Name: {rName}</p> : ""}
                {lYear ?  <p className='fpara'>Lounch Year: {lYear}</p> : ""}
                {upcome ? <p className='fpara'>Upcoming: {upcome}</p> : ""}
      
                </div>
              </div>
            </Col>
  )
}

export default Cards