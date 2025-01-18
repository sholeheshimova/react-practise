import React, { createContext, useState } from 'react'

 export const FavoritesContext = createContext(null)
const FavoritesProvider = ({children}) => {
 
    const [favorites, setFavorites ] = useState([]);

    const toggleFavorites = (phone) => {
        const idx = favorites.findIndex((q) => q._id === phone._id)
        if (idx === -1) {
            setFavorites([...favorites, {...phone}])
        }else{
            setFavorites([...favorites].filter((q) => q._id !== phone._id))
        }
    }
  return (
    <FavoritesContext.Provider value={{favorites, toggleFavorites}}>{children}</FavoritesContext.Provider>
  )
}

export default FavoritesProvider