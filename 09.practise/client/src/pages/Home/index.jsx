import React, { useEffect, useState } from 'react'
import axios from "axios"

const BASE_URL = "http://localhost:3000/blogs"

const Home = () => {

    const [blogs, setBlogs] = useState([])

   const getBlogs = async() => {
    try {
        const response = await axios(`${BASE_URL}`)
        setBlogs(response.data)
    } catch (error) {
        console.log(error);
    }
   }
   useEffect(() => {
    getBlogs()
   }, [])
  return (
   <>
   
   
   {blogs.length > 0 && blogs.map((blog) => (
     <div key={blog._id}>
     <h5>{blog.title}</h5>
     <h6>{blog.description}</h6>
 </div>
   ))}
   </>
  )
}

export default Home