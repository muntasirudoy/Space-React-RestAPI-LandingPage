import React, { useEffect, useState } from 'react'
import './filter-search.css'
import { Nav,Navbar,Container,Form,Button,FormControl,Spinner, Row} from 'react-bootstrap'
import Cards from './Cards'
import { BiDownArrowAlt } from 'react-icons/bi';


const Filter_Search = ({data,loading}) => {

    const dataArrry = [...data]

    const [searchData, setSearchData] = useState(dataArrry)

 
   const handleSearch =(e)=>{
    const text = e.target.value
    const sear = data.filter(item=> item.rocket.rocket_name.includes(text))
    setSearchData(sear)
    }

   const handleSelect =(e)=>{ 
    const yesno = e.target.value == "Yes" ? true : false  
    const sear = data.filter(item=> item.upcoming == yesno)
    setSearchData(sear)
    console.log(yesno)
   }




   
  return (
    <div className='filter-search'>
         <Container>
             <div className='filter-search-tab'>
             <Navbar style={{background:"#2D2853",padding:"18px 25px"}} expand="lg">
                <Navbar.Text>
                    Is upcomming?  
                </Navbar.Text>
                   <Form.Select size="sm" onChange={handleSelect}> 
                         <option>Yes</option>
                         <option>No</option>
                    </Form.Select>
                    <BiDownArrowAlt className='ficon' />
                    <span className='bdr'></span>
                <Navbar.Text>
                    Launch year? 
                </Navbar.Text>
                   <Form.Select size="lg" className='fselect-year' >
                         <option>2001-2005</option>
                         <option>2006-2010</option>
                    </Form.Select>
                    <BiDownArrowAlt className='ficon' />
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
                        onChange={handleSearch}
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Navbar>
             </div>
             <div className='rocet-cards'>
                    <Row>
                            {loading? 
                              <div className='spin'>
                               <Spinner animation="grow" variant="light" />
                               <span >Loading...</span>
                              </div>
                             :
                           searchData.map(item=>(   
                                <Cards rcard="25px" rcardh="394px" rcardm="25px" lg="3" md="4" sm="6" rcardb="35px" 
                                    img={item.links.mission_patch_small} 
                                    title={item.mission_name} 
                                    rName={item.rocket.rocket_name} 
                                    lYear={item.launch_year}
                                    upcome={item.upcoming.toString()}
                                /> 
                               ))
                            //     :
                            // data.map(item=>(   
                            //     <Cards rcard="25px" rcardh="394px" rcardm="25px" lg="3" md="4" sm="6" rcardb="35px" 
                            //         img={item.links.mission_patch_small} 
                            //         title={item.mission_name} 
                            //         rName={item.rocket.rocket_name} 
                            //         lYear={item.launch_year}
                            //         upcome={item.upcoming.toString()}
                            //     /> 
                            //    ))
  
                            }
                    </Row>
             </div>
         </Container>
    </div>
  )
}

export default Filter_Search

