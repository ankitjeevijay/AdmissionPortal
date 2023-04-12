const mongoose = require('mongoose')
const url = "mongodb://127.0.0.1:27017/AdmissionPortal"

const connectDB = ()=>{
    return mongoose.connect(url)
    .then(()=>{
        console.log("connection successfuly")
    })
    .catch((error)=>{

        console.log(error)
    })
}
module.exports = connectDB