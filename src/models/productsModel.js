const mongoose = require("mongoose");
const DataSchima = mongoose.Schema({
    Name: { type: String, unique: true },
    Roll: { type: Number, min: 10 },
    Class: { type: String, required: true },
    Remark: { type: String, default: "No Remark" }
}, { versionKey: false })
const productModel = mongoose.model("products", DataSchima);
module.exports = productModel;