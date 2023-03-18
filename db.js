const mongoose  = require('mongoose')
const dotenv = require("dotenv");

dotenv.config();

// make connection to database
 

const connectDb = async ()=> {
    try {
      const conn = await  mongoose.connect(process.env.MONGO_URI)
      console.log('ok its connected')
    } catch (error) {
        console.log(error)
        console.log('its not connected')
    }
}

module.exports  = connectDb