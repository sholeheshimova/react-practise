import React, { useContext, useEffect, useState } from 'react'
// import Box from '@mui/material/Box';
import axios from 'axios'
// import Grid from '@mui/material/Grid';
import { Grid2 } from '@mui/material';
import { FaRegHeart } from "react-icons/fa";
import { FavoritesContext } from '../../context/FavoritesContext';
import { Link } from 'react-router-dom';



const BASE_URL = "http://localhost:3000/phones"
const Home = () => {

  const [phones, setPhones] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const {toggleFavorites} = useContext(FavoritesContext)

  const getPhones = async() => {
    try {
      const response = await axios.get(`${BASE_URL}`)
      setPhones(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPhones()
  }, [])

  const filteredPhones = phones.filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase().trim()))

  const handleChange = (e) => {
    let sortedPhones = null;
    if (e.target.value === "asc") {
      sortedPhones = [...phones].toSorted((a,b) => a.price - b.price)
    }else if (e.target.value === "desc") {
      sortedPhones = [...phones].toSorted((a,b) => b.price - a.price)
    }else{
      sortedPhones = [...phones]
    }
    setPhones([...sortedPhones])
  }

  return (
    <>
    <div style={{display: "flex", marginTop: "80px"}}>
      
    <div>
      <input type="search"  style={{marginBottom: "40px"}} onChange={(e) => {setSearchQuery(e.target.value)}}/>

      <select name="" id="" onChange={handleChange}>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
        <option value="default">Deafult</option>
      </select>
    <Grid2 container spacing={2}>
   
   {phones.length > 0 && filteredPhones.map((ph) => {
     return (
       
      
         <Grid2 size = {{xs:12, md: 6, lg:4}} key={ph._id} >
           <div style={{border: "2px solid black", height: "300px", width: "200px"}}>
           
             <img src={ph.image} alt="" width={100}  />
             <h4>{ph.title}</h4>
             <h6>{ph.description}</h6>

            <div style={{display: "flex", gap: "10px"}}>
            <Link to={`/${ph._id}`}><button style={{marginTop: "30px", marginLeft: "10px", width: "50px", height: "30px"}}>Details</button></Link>
            <button style={{height: "20px", width: "30px"}} onClick={() => {toggleFavorites(ph)}}><FaRegHeart /></button>
            </div>

           </div>
         </Grid2>
        
     
     
     )
   })}
     </Grid2>
    </div>
    </div>
    </>
  )
}

export default Home