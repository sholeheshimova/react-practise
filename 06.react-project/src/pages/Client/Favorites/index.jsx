import React, { useContext } from 'react'
import { FavoritesContext } from '../../../context/FavoritesContext'
import { FaRegHeart } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { Button, Card } from "antd";
const { Meta } = Card;
import { FaShoppingBasket } from "react-icons/fa";


const Favorites = () => {

  const {favorites, clearFavorites, toggleFavorites} = useContext(FavoritesContext)
  return (
    <>
    {favorites.length >0  && favorites.map((product)=> {
       <Card
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

export default Favorites