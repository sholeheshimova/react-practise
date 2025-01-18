import React, { createContext, useState } from 'react'

export const FavoritesContext = createContext()
const FavoritesProvider = ({children}) => {

    const [oclock, setOclock] = useState([])

    const toggleFavorites = (oc) => {
        const idx = oclock.findIndex((q) => q._id === oc._id)
        if (idx === -1) {
            setOclock([...oclock , {...oc}])
        }else{
            setOclock([...oclock].filter((q) => q._id !== oc._id))
        }
    }

  return (
    <>
    <FavoritesContext.Provider value={{oclock, toggleFavorites}}>{children}</FavoritesContext.Provider>
    </>
  )
}

export default FavoritesProvider