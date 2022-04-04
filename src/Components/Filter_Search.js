import React from 'react'
import './filter-search.css'
import { Nav,Navbar,Container,Form,Button,FormControl, Card, Row} from 'react-bootstrap'
import Cards from './Cards'
import t1 from "../Images/t1.png"
import t2 from "../Images/t2.png"
import t3 from "../Images/t3.png"


const Filter_Search = () => {
  return (
    <div className='filter-search'>
         <Container>
             <div className='filter-search-tab'>
             <Navbar style={{background:"#2D2853",padding:"18px 25px"}} expand="lg">
                <Navbar.Text>
                    Is upcomming?   
                </Navbar.Text>
                   <Form.Select size="sm">
                         <option>Yes</option>
                         <option>No</option>
                    </Form.Select>
                    <span className='bdr'></span>
                <Navbar.Text>
                    Launch year?   
                </Navbar.Text>
                   <Form.Select size="sm">
                         <option>2001-2005</option>
                         <option>2006-2010</option>
                    </Form.Select>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                       
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search for rocet"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Navbar>
             </div>

             <div className='rocet-cards'>
                    <Row>
                        <Cards rcard="25px" rcardh="394px" rcardm="25px" lg="3" md="4" sm="6" img={t1} title="Mission Bongo" para=" that we can make Spr lorem ipsam ty robotics solutions."/>
                        <Cards rcard="25px" rcardh="394px" rcardm="25px" lg="3" md="4" sm="6" img={t2} title="Mission BD" para="At at we can make Spaceg lorem ipsam robotics solutions."/>
                        <Cards rcard="25px" rcardh="394px" rcardm="25px" lg="3" md="4" sm="6" img={t3} title="Mission 11" para="At at we can make Spaceg lorem ipsam robotics solutions."/>
                        <Cards rcard="25px" rcardh="394px" rcardm="25px" lg="3" md="4" sm="6" img={t3} title="Mission 11" para="At at we can make Spaceg lorem ipsam robotics solutions."/>
                        <Cards rcard="25px" rcardh="394px" rcardm="25px" lg="3" md="4" sm="6" img={t3} title="Mission 11" para="At at we can make Spaceg lorem ipsam robotics solutions."/>
                        <Cards rcard="25px" rcardh="394px" rcardm="25px" lg="3" md="4" sm="6" img={t3} title="Mission 11" para="At at we can make Spaceg lorem ipsam robotics solutions."/>
                        <Cards rcard="25px" rcardh="394px" rcardm="25px" lg="3" md="4" sm="6" img={t3} title="Mission 11" para="At at we can make Spaceg lorem ipsam robotics solutions."/>
                        <Cards rcard="25px" rcardh="394px" rcardm="25px" lg="3" md="4" sm="6" img={t3} title="Mission 11" para="At at we can make Spaceg lorem ipsam robotics solutions."/>
                    </Row>
             </div>



         </Container>
    </div>
  )
}

export default Filter_Search