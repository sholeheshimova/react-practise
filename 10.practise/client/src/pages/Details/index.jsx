import { Grid2 } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BASE_URL = "http://localhost:3000/phones"
const Details = () => {
  const {id} = useParams()
  const [phones, setPhones] = useState([])

  const getPhones = async() => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`)
      setPhones(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPhones()
  }, [])

  return (
    <>
    <div style={{display: "flex"}}>
      {phones ? 
       <Grid2 size = {{xs:12, md: 6, lg:4}} key={phones._id} >
       <div style={{border: "2px solid black", height: "300px", width: "200px"}}>
         <img src={phones.image} alt="" width={100}  />
         <h4>{phones.title}</h4>
         <h6>{phones.description}</h6>

     

       </div>
       <div className="text">
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cupiditate necessitatibus maiores maxime animi aliquid quidem perspiciatis aut voluptatibus nisi, iure possimus amet laborum itaque quam quod natus, nam rem.</p>
      </div>
     </Grid2> : <h2>no such phone</h2>
    }
    </div>
    </>
  )
}

export default Details