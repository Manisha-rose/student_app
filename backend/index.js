//import
const express=require ("express")
require("./connection")
var stuModel=require("./model/student")
var cors = require('cors')

//initialize
const app = express()
app.use(cors())

//middlewire
app.use(express.json())

//api creation
app.get('/', (req, res) => {
  res.send('Hello World')
})
//add
app.post('/add',async(req,res)=>{
    stuModel(req.body).save()
    res.send("data added")
})
//view
app.get('/view',async(req,res)=>{
    const data = await stuModel.find()
    res.send(data)
})

app.get('/sample',(req,res)=>{
    res.send("trial api")
})

//delete
app.delete('/remove/:id',async(req,res)=>{
    await stuModel.findByIdAndDelete(req.params.id)
    res.send("data deleted")
})

//update
app.put('/update/:id',async(req,res)=>{
    await stuModel.findByIdAndUpdate(req.params.id,req.body)
    res.send("data updated")
  
})

//port setting
app.listen(3004, () => {
  console.log('Server is running on http://localhost:3004')
})