const mongoose = require('mongoose')
//const url = "mongodb://127.0.0.1:27017/AdmissionPortal"
const live_Url = "mongodb+srv://ankitjeevijay:ankitjee123@cluster0.rrjycom.mongodb.net/admission-portal"

const connectDB = ()=>{
    return mongoose.connect(live_Url)
   // return mongoose.connect(url)
    .then(()=>{
        console.log("connection successfuly")
    })
    .catch((error)=>{

        console.log(error)
    })
}
module.exports = connectDB