import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header>
        <div className="header">
            <h2>Logo</h2>
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