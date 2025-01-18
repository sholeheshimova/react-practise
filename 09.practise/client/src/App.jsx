import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Details from './pages/Details'
import Favorites from './pages/Favorites'
import Add from './pages/Add'

function App() {


  return (
    <>
     <Routes>
      <Route path='/'  element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='/details'  element={<Details />}/>
      <Route  path='/favorites' element={<Favorites />}/>
      <Route  path='/add' element={<Add />}/>
        
      </Route>
     </Routes>
    </>
  )
}

export default App
