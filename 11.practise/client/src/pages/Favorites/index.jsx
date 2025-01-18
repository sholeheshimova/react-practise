import React, { useContext, useEffect, useState } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'
import axios from 'axios'
import { FaRegHeart } from "react-icons/fa";
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'


const BASE_URL = "http://localhost:4000/oclocks"
const Favorites = () => {
    // const [oclocks, setOclocks] = useState([])
    const {oclock, toggleFavorites} = useContext(FavoritesContext)
    console.log(toggleFavorites);
    

 


  return (
    <>
    <div>
     <Row >
      {oclock.length > 0 && oclock.map((o) => {
        return (
            <Col span={6} style={{display: "flex", justifyContent: "center"}}>
                <div style={{marginTop: "150px"}}>
                    <img src={o.image} alt=""  width={140} style={{display: "flex", margin: "0 auto" }}/>
                    <h4 style={{fontSize:"20px"}}>{o.title}</h4>
                    <p style={{color: "red", fontSize: "18px"}}><span>Price: ${o.price}</span></p>
                    <div className="btns" style={{display: "flex", justifyContent: "space-around", paddingTop: "30px"}}>
                    <Link to={`oclocks/${o._id}`}><button style={{width: "100px", height: "30px", border: "none", backgroundColor: "lightgrey", borderRadius: "5px"}} >Details</button></Link>
                    <button style={{border: "none", width: "50px", backgroundColor: "white", fontSize: "20px"}}><FaRegHeart  onClick={() => {toggleFavorites(o)}}/></button>
                    </div>
                </div>
            </Col>
        )
      })}
    </Row>
     </div>
    </>
  )
}

export default Favorites