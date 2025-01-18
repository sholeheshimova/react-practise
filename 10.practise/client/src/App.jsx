import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/inex'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Add from './pages/Add'
import Details from './pages/Details'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />} >
        <Route index element={<Home />} />
        <Route  path='/favorites' element={<Favorites />}/>
        <Route  path='/:id' element={<Details />}/>
        <Route  path='/add' element={<Add />}/>

        </Route>
      </Routes>
    </>
  )
}

export default App
