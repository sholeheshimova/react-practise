import React from 'react'
import ClientHeader from '../../../layouts/Client/Header'
import { Outlet } from 'react-router-dom'

const ClientLayout = () => {
  return (
    <>
    <ClientHeader />
    <Outlet />
    </>
  )
}

export default ClientLayout