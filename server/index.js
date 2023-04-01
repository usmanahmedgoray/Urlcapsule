const express = require('express');
const ConnectToMongo = require('./db')
const app = express();
const cors = require('cors');

ConnectToMongo()
// Declare the port
const port = 8001;

// Use the express in JSON and use CORS for front-end interaction
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
})); 



// Ise the Route
app.use('/api', require('./Routes/Url'))



app.listen(port,()=>{
    console.log(`This server is running at localhost at port ${port}`)
})