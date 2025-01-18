import React, { useState } from 'react'
import { createContext } from 'react'


export const FavoritesContext = createContext(null)
const FavoritesProvider = ({children}) => {

  const [favorites, setFavorites] = useState([])

  const toggleFavorites = (product) => {
    const found = favorites.find((p) =>p.id === product.id );
    if (found) {
      setFavorites(favorites.filter((q) => q.id !== product.id))
    }else{
      setFavorites([...favorites, product])
    }
  }
  console.log(favorites);
  


  const clearFavorites = ()=> {
    setFavorites([])
  }
  return (
    <FavoritesContext.Provider value={{favorites, toggleFavorites, clearFavorites}}>{children}</FavoritesContext.Provider>
  )
}

export default FavoritesProvider