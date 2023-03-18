const express = require('express')
 const connectDb = require('./db')

 const app =  express()
 
 var cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/products' , require('./routes/productsRoute'))

connectDb()
// listen on port 3000
app.listen(3000)