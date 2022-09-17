const mongoose = require("mongoose");
const DataSchima = mongoose.Schema({
    Name: String,
    Roll: String,
    Class: String,
    Remark: String
})
const productModel = mongoose.model("Product", DataSchima);
module.exports = productModel;