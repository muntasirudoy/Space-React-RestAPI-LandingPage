
import React, { useEffect } from 'react'
import Banner from '../Components/Banner'
import Discover from '../Components/Discover'
import Filter_Search from '../Components/Filter_Search'
import axios from 'axios'
import { useDispatch} from 'react-redux'




const Home = (props) => {
  const dispatch = useDispatch()
  useEffect(async()=>{
    let {data} = await axios.get('https://api.spacexdata.com/v3/launches')
    dispatch({ type: 'setData',payload:data })
  },[])



  return (
       <>
           <Banner />
           <Discover />
           <Filter_Search />

       </>
  )
}



export default Home