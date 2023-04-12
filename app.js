const express = require('express')
const app = express()
const port = 3000

const web = require('./routes/web')
const connectDB = require('./db/connectdb')
const fileUpload = require("express-fileupload");
var cloudinary = require('cloudinary');
var session = require('express-session')
var flash = require('connect-flash')
// token get code
var cookieParser = require('cookie-parser')
app.use(cookieParser())

// database connection
connectDB()

app.use(express.urlencoded({ extended: false }))

// file uploader
app.use(fileUpload({ useTempFiles: true }));

//  for flash message
app.use(session({
  secret: 'secret',
  cookie: {maxAge: 60000 },
  resave: false,
  saveUninitialized: false,

}));
app.use(flash());




app.use('/',web)

// ejs setup 
app.set('view engine', 'ejs')

app.use(express.static('public'))


app.listen(port, () => {
  console.log('servaer is start')
})