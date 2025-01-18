import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../Header/index.module.scss'

const Header = () => {
  return (
   <>
   <header>
    <div className={styles.header}>
        <div className={styles.logo}>
            <h1 className={styles.head1}>Time</h1>
            <h1 className={styles.head2}>Zone</h1>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/favorites"}>Favorites</NavLink>
                </li>
                <li>
                    <NavLink to={"/add"}>Add</NavLink>
                </li>
            </ul>
        </nav>
    </div>
   </header>
   </>
  )
}

export default Header