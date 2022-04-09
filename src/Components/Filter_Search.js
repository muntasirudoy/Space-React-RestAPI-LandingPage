import React, { useEffect, useState } from 'react'
import './filter-search.css'
import { Nav,Navbar,Container,Form,Button,FormControl,Spinner, Row} from 'react-bootstrap'
import Cards from './Cards'
import { BiDownArrowAlt } from 'react-icons/bi';
import axios from 'axios';


const Filter_Search = () => {
    

   const [loading, setLoading] =useState(false)
   const [searchData, setSearchData] = useState([])
   const [allData, setAllData] = useState('')
  
  useEffect(async()=>{
    setLoading(true)
        try{ 
          let {data} = await axios.get('https://api.spacexdata.com/v3/launches')
          setAllData(data)
          setLoading(false)
          setSearchData(data)
        }
        catch(err){
          console.log(err)
        }
  },[])
  



  

  
   const handleSearch =(e)=>{
    const text = e.target.value
      if (text.value == ""){
        setSearchData(allData)
      }
      else{
        const sear = allData.filter(item=> item.rocket.rocket_name.toLowerCase().includes(text))
        setSearchData(sear)
      }
    }

   const handleSelectUpcome =(e)=>{ 
    const yesno = e.target.value == "Yes" ? true : false 
     if(yesno){
        const sear = allData.filter(item=> item.upcoming == yesno)
        setSearchData(sear)
     }
     else{
         setSearchData(allData)
     }
   }

   const handleSelectYear=(e)=>{
       let year = e.target.value 
      
    console.log(year)
    if(year == "Less than 1990"){
        const search = allData.filter(item=> item.launch_year <= "1990")
        setSearchData(search)
    }

   else if(year == "1991-1995"){
        const search = allData.filter(item=> item.launch_year >= "1991" && item.launch_year <= "1995")
        setSearchData(search)
    }

   else if(year == "1995-2000"){
        const search = allData.filter(item=> item.launch_year >= "1996" && item.launch_year <= "2000")
        setSearchData(search)
    }

   else if(year == "2001-2005"){
        const search = allData.filter(item=> item.launch_year >= "2001" && item.launch_year <= "2005")
        setSearchData(search)
    }

   else if(year == "2006-2010"){
        const search = allData.filter(item=> item.launch_year >= "2006" && item.launch_year <= "2010")
        setSearchData(search)
    }

    else if(year == "2011-2015"){
        const search = allData.filter(item=> item.launch_year >= "2011" && item.launch_year <= "2015")
        setSearchData(search)
    }

    else if(year == "2016-2020"){
        const search = allData.filter(item=> item.launch_year >= "2015" && item.launch_year <= "2020")
        setSearchData(search)
    }

    else if(year == "Above 2020"){
        const search = allData.filter(item=> item.launch_year >"2020")
        setSearchData(search)
    }

    else{
        console.log("nothing")
    }

   }





  return (
    <div className='filter-search'>
         <Container>
             <div className='filter-search-tab'>
             <Navbar style={{background:"#2D2853",padding:"18px 25px"}} expand="lg">
                <Navbar.Text>
                    Is upcomming?  
                </Navbar.Text>
                   <Form.Select size="sm" onChange={handleSelectUpcome}> 
                         <option>Y/N</option>
                         <option>Yes</option>
                         <option>No</option>
                    </Form.Select>
                    <BiDownArrowAlt className='ficon' />
                    <span className='bdr'></span>
                <Navbar.Text>
                    Launch year? 
                </Navbar.Text>
                   <Form.Select size="lg" className='fselect-year' onChange={handleSelectYear}>

                         <option>Select Year</option>
                         <option>Less than 1990</option>
                         <option>1991-1995</option>
                         <option>1996-2000</option>
                         <option>2001-2005</option>
                         <option>2006-2010</option>
                         <option>2011-2015</option>
                         <option>2016-2020</option>
                         <option>Above 2020</option>

                      
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
                 {console.log(searchData)}
                    <Row>
                            {loading? 
                              <div className='spin'>
                               <Spinner animation="grow" variant="light" />
                               <span >Loading...</span>
                              </div>
                             :
                             searchData.length >= 1 ?
                             searchData.map(item=>(   
                                <Cards rcard="25px" rcardh="394px" rcardm="25px" lg="3" md="4" sm="6" rcardb="35px" 
                                    img={item.links.mission_patch_small} 
                                    title={item.mission_name} 
                                    rName={item.rocket.rocket_name} 
                                    lYear={item.launch_year}
                                    upcome={item.upcoming.toString()}
                                /> 
                               ))
                               :
                              <>
                                <p className='nothing'>Noting Found</p>
                               <img src='https://assets7.lottiefiles.com/packages/lf20_dmw3t0vg.json' />
                              </>
  
                            }
                    </Row>
             </div>
         </Container>
    </div>
  )
}

export default Filter_Search

