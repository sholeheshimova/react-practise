import React, { useContext } from 'react'
import { Button, Card } from "antd";
const { Meta } = Card;
import { FaRegHeart } from "react-icons/fa";
import {Link} from 'react-router-dom'

import { FaShoppingBasket } from "react-icons/fa";
import { FavoritesContext } from '../../../context/FavoritesContext';

const Home = ({products}) => {

  const {toggleFavorites} = useContext(FavoritesContext)
  return (
    <>
 <div className="cards" style={{display: 'flex', flexWrap: 'wrap', gap: '80px', padding: '20px'}}>
 {products && products.map((product) => (
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
  ))}
 </div>


   
      
    </>
  ) 
  
}

export default Home