import React, { useContext } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'
import { Grid2 } from '@mui/material';
import { FaRegHeart } from "react-icons/fa";




const BASE_URL = "http://localhost:3000/phones"

const Favorites = () => {

  const {favorites, toggleFavorites} = useContext(FavoritesContext)
  return (
   <>
   <div style={{display: "flex", marginTop: "80px"}}>
    <Grid2 container spacing={2}>
      {favorites.length > 0 && favorites.map((ph) => {
        return (
          
          
            <Grid2 size = {{xs:12, md: 6, lg:4}} key={ph._id} >
              <div style={{border: "2px solid black", height: "300px", width: "200px"}}>
                <img src={ph.image} alt="" width={100}  />
                <h4>{ph.title}</h4>
                <h6>{ph.description}</h6>

               <div style={{display: "flex", gap: "10px"}}>
               <button style={{marginTop: "30px", marginLeft: "10px", width: "50px", height: "30px"}}>Details</button>
               <button style={{height: "20px", width: "30px"}} onClick={() => {toggleFavorites(ph)}}><FaRegHeart /></button>
               </div>

              </div>
            </Grid2>
           
        
        
        )
      })}
        </Grid2>
    </div>
   </>
  )
}

export default Favorites