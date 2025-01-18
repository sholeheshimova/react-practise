import React from 'react'
import { NavLink, Routes } from "react-router-dom"
import styles from '../Header/index.module.scss'

const AdminHeader = () => {
  return (
    <>
    <header>
        <div className={styles.header}>
            <h2 className={styles.adminlogo}>Admin Logo</h2>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/admin"}>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/admin/products"}>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    </>
  )
}

export default AdminHeader