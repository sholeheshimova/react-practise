const express = require('express')
const app = express()
const port = 3000
const mongoose = require ('mongoose');
const { Schema } = mongoose;

app.use(express.json())

const blogSchema = new Schema({
    title: String,
    description: String
})

const blogModel = mongoose.model("Blog", blogSchema)

//get data
app.get('/blogs',  async(req, res) => {
    try {
        const blogs = await blogModel.find({})
        res.json(blogs)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
  
})

//get data by id

app.get('/blogs/:id',  async(req, res) => {
    const {id} = req.params;
    try {
        const blog = await blogModel.findById(id)
        res.json(blog)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
  
})


//delete data by id

app.delete('/blogs/:id',  async(req, res) => {
    const {id} = req.params;
    try {
        const deletedBlog = await blogModel.findByIdAndDelete(id)
        res.json(deletedBlog)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
})


// post data

app.post('/blogs',  async(req, res) => {
    try {
      const addBlog = blogModel({...req.body})
      await addBlog.save()
      res.json(addBlog)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
})

mongoose.connect("mongodb+srv://solaehazmp202:shola123@cluster0.tdger.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {console.log('Connected!')
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
  });