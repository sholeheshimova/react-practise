const express = require('express')
var cors = require('cors')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const app = express()
const port = 3000


app.use(express.json())
app.use(cors())


const practiseSchema = new Schema({
    image: String,
    title: String,
    description: String,
  });


const practiseModel = mongoose.model("Practise", practiseSchema)



// get all data
app.get('/phones',  async(req, res) => {
    try {
        const phones = await practiseModel.find({})
        res.json(phones)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
})

//get data by id
app.get('/phones/:id',  async(req, res) => {
    const {id} = req.params;
   try {
    const phone = await practiseModel.findById(id)
    res.json(phone)
   } catch (error) {
    res.json({
        message: "error"
    })
   }
  })

// delete data by id
  app.delete('/phones/:id',  async(req, res) => {
    const {id} = req.params;
    try {
        const deletedPhone = await practiseModel.findByIdAndDelete(id);
        res.json(deletedPhone)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
  })

// post data

app.post('/phones', async(req,res) => {
    console.log(req.body);
    try {
        const addNewPhone = practiseModel({...req.body});
        await addNewPhone.save();
        res.json(addNewPhone)
    } catch (error) {
        res.json({
            message: "error"
        })
    }
} )




mongoose.connect("mongodb+srv://solaehazmp202:shola123@cluster0.tdger.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => 
    {console.log('Connected!')
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })
    });