import React from 'react'

const Product = (props) => {
  return (
    <>
    <h2>Mehsullar</h2>
    <p>Adi: {props.name} </p>
    <p>Qiymeti: {props.price} </p>
    <hr />
    <h2>Mehsullar</h2>
    <p>Adi: {props.productname} </p>
    <p>Qiymeti: {props.productprice} </p>
    </>


  )
}

export default Product