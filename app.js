const express = require("express");
const app = new express()
// Security Middleware Import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet")
const mongoSanitize = require("express-mongo-sanitize");
// const xssCline = require("xssCline")
const hpp = require("hpp")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
// Security Middleware Implement 
app.use(cors())
app.use(hpp())
app.use(helmet())
app.use(rateLimit())
app.use(mongoSanitize())
const limite = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(limite)



// Mongo DB Connection 
const URL = "mongodb://127.0.0.1:27017/coiner"
const OPTION = { user: "", pass: "" }
mongoose.connect(URL, OPTION, (error) => {
    console.log("Db Connection Success Full ")
    console.log(error)
})





module.exports = app




