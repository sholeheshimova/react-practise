const { default: axios } = require('axios');
const express = require('express')

var cors = require('cors')

const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const BlogPost = new Schema({
   title: String,
   description: String,
   price: Number,
  });


  const BlogModel = mongoose.model("Blog", BlogPost)


app.get('/blogs', async(req, res) => {
    try {
        const blogs = await BlogModel.find({})
        res.json(blogs)
    } catch (error) {
        res.json({
            message: "error"
        })
    }

})


app.get('/blogs/:id',  async(req, res) => {
    const {id} = req.params;
    try {
        const blog = await BlogModel.findById(id);
        res.json(blog)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
  })


  app.delete('/blogs/:id',  async(req, res) => {
    const {id} = req.params;
    try {
        const deletedBlog = await BlogModel.findByIdAndDelete(id);
        res.json(deletedBlog)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
  })


  app.post('/blogs',  async(req, res) => {
    
    try {
       const addNewBlog = BlogModel({...req.body});
       await addNewBlog.save();
       res.json(addNewBlog)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
  })



mongoose.connect('mongodb+srv://solaehazmp202:shola123@cluster0.tdger.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected!')
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
});
