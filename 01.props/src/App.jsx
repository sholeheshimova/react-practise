import { useState } from 'react'
import './App.css'
import Product from './Product'

function App() {
 

  return (
    <>
     <Product name="Ayaqqabi" price={30} />
     <Product productname="Don"  productprice={55}/>
    </>
  )
}

export default App
