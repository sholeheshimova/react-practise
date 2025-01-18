import { Route, Routes } from 'react-router-dom'
import './App.css'
import ClientLayout from './components/Client/ClientLayout'
import Home from './pages/Client/Home'
import Favorites from './pages/Client/Favorites'
import Details from './pages/Client/Details'
import Basket from './pages/Client/Basket'
import Dashboard from './pages/Admin/Dashboard'
import Products from './pages/Admin/Products'
import AdminLayout from './components/Admin/AdminLayout'
import { useEffect, useState } from 'react'
import axios from 'axios'

const BASE_URL = "http://localhost:3000/products"

function App() {
 
  const [products, setProucts] = useState([])

  const getAllProducts = async() => {
    try {
      const response = await axios.get(BASE_URL)
      setProucts(response.data)
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [])


  return (
    <>
     <Routes>
      //client
      <Route  path='/' element={<ClientLayout />}>
      <Route index element={<Home products={products} />}/>
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/basket' element={<Basket />} />
      <Route  path='/:id' element={<Details />}/>
      </Route>
      //admin
      <Route path='/admin' element={<AdminLayout />}>
      <Route  index element={<Dashboard />}/>
      <Route path='/admin/products' element={<Products />} />
      </Route>
     </Routes>
    </>
  )
}

export default App
