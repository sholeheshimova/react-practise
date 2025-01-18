
import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:8080/products"

function App() {
 
const getAllProducts = async() =>{
  const response = await axios.get(BASE_URL)
  console.log(response.data);
}

useEffect(() => {
  getAllProducts()
}, [])

const createProduct = async(newProduct) =>{
  await axios.post(`${BASE_URL}`, newProduct)
}
useEffect(() =>{

  const newProduct ={
    "title": "hello",
    "price": 11
  }
 createProduct(newProduct)
})
 
  return (
    <>
     
    </>
  )
}

export default App
