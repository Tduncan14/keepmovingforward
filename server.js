const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routes/auth');


dotenv.config()



const app = express()

mongoose.connect(process.env.MongoUri,{useNewUrlParser:true,useUnifiedTopology: true})
.then(() => console.log('connected to the database'))
.catch((err) => console.log(err))


app.use(cors())
app.use(express.json());
app.use('/api/auth',authRouter)


const PORT = process.env.PORT ||  8000





app.listen(PORT,() => (
     console.log(`you are now listening on ${PORT}`)
))