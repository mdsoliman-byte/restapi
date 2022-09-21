const mongoose = require("mongoose");
const DataSchima = mongoose.Schema({
    Name: String,
    Roll: String,
    Class: String,
    Remark: { type: String, default: "No Remark" }
} ,{versionKey: false})
const productModel = mongoose.model("products", DataSchima);
module.exports = productModel;