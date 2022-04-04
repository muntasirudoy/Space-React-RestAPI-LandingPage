import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import Discover from '../Components/Discover'
import Filter_Search from '../Components/Filter_Search'


const Home = () => {

  const [data, setData] =useState([])
  const [load, setLoading] =useState(false)

useEffect(async()=>{
  setLoading(true)
      try{ 
        let {data} = await axios.get('https://api.spacexdata.com/v3/launches')
        setData(data)
        setLoading(false)
      }
      catch(err){
        console.log(err)
      }
    
   
  

},[])


  return (
       <>
           <Banner />
           <Discover />
           <Filter_Search data={data} loading={load}/>
       </>
  )
}

export default Home