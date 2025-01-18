import { Card } from 'antd'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from "antd";
const { Meta } = Card;
import { FaRegHeart } from "react-icons/fa";
import {Link} from 'react-router-dom'

import { FaShoppingBasket } from "react-icons/fa";
import { FavoritesContext } from '../../../context/FavoritesContext';

const BASE_URL = "http://localhost:3000/products"

const Details = ({products}) => {

    const [products, setProducts] = useState()
    const {id} = useParams()
    const {toggleFavorites} = useContext(FavoritesContext)

        const getProducts = async() =>{
          try {
            const response = await axios.get(`${BASE_URL}/${id}`)
            setProducts(response.data)
            console.log(response.data);
            
          } catch (error) {
            console.log(error);
            
          }
        }

        useEffect(() => {
            getProducts()
        },[])
    
  return (
    <>
    {products && ((product) => {
      <Card
      key={product.id}
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={product.image}/>}
    >
      <Meta title={<Link to={`/${product.id}`}>{product.title}</Link>} description={<div>
 
       <p style={{color: 'red'}}>Price: ${product.price}</p>
       <p>{product.description.slice(0,50)}</p>
      </div>
      } />
 
     <Button  ><FaShoppingBasket /></Button>
      <Button onClick={() => toggleFavorites((product)) }><FaRegHeart /></Button>
    </Card>
    })}
    </>
  )
}

export default Details