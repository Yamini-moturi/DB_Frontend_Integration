const express = require('express')
const app = express()
const cors= require('cors');
const {getConnection} =require('./connection');
const port=4000

app.use(cors({
    origin: '*'
}))

app.get('/', function (req, res) {
    res.send('hi')
  })

app.get('/PlantList', async function (req, res) {

    const getConn =await getConnection()
    console.log(getConn,'getConnection')
    const result= await getConn.query(' SELECT * FROM HousePlant');
    res.send(result.recordsets[0]);
  })
  
app.listen(port,()=>{
    console.log('node is running on port ${process.env.port}');
})
