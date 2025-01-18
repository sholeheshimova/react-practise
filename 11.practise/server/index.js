const express = require('express')
const mongoose = require('mongoose');
var cors = require('cors')
const Schema = mongoose.Schema;
const app = express()
const port = 4000

app.use(cors())
app.use(express.json())


const oclockScheam = new Schema({
    image: String,
    title: String,
   price: Number,
  });

  const oclockModel = mongoose.model('Oclock', oclockScheam);

//get all data

app.get('/oclocks',  async(req, res) => {
   try {
    const response = await oclockModel.find({})
    res.json(response)
   } catch (error) {
    res.json({
        message: "error"
    })
   }
})


//get databy id
app.get('/oclocks/:id',  async(req, res) => {
    const {id} = req.params;
    try {
     const response = await oclockModel.findById(id)
     res.json(response)
    } catch (error) {
     res.json({
         message: "error"
     })
    }
 })


 // delete data by id
 app.delete('/oclocks/:id',  async(req, res) => {
    const {id} = req.params;
    try {
     const deletedOclock = await oclockModel.findByIdAndDelete(id)
     res.json(deletedOclock)
    } catch (error) {
     res.json({
         message: "error"
     })
    }
 })

// post data
app.post('/oclocks',  async(req, res) => {

    try {
        const oclock = oclockModel({...req.body})
        await oclock.save()
    } catch (error) {
        console.log(error);
    }
  })


  mongoose.connect("mongodb+srv://solaehazmp202:shola123@cluster0.tdger.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {console.log('Connected!')
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
  });

