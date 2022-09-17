const mongoose = require("mongoose");
const DataSchima = mongoose.Schema({
    Name: String,
    Roll: String,
    Class: String,
    Remark: String
})
const productModel = mongoose.model("products", DataSchima);
module.exports = productModel;