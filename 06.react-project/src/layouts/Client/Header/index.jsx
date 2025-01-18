import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../Header/index.module.scss'
import { FavoritesContext } from '../../../context/FavoritesContext'

const ClientHeader = () => {

    const {favorites} = useContext(FavoritesContext)
  return (
    <>
    <header className={styles.clientheader}>
        <div className={styles.header}>
            <h2 className={styles.clientlogo}>Client Logo</h2>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/favorites"}>Favorites <sup>{favorites.length}</sup></NavLink>
                    </li>
                    <li>
                        <NavLink to={"/basket"}>Basket</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    </>
  )
}

export default ClientHeader