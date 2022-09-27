const mongoose = require("mongoose");
const DataSchima = mongoose.Schema({
    Name: { type: String, unique: true },
    Mobile: {
        type: String,
        validate: {
            validator: function (value) {
                if (value.length === 11) {
                    return true
                } else {
                    return false
                }
            },
            message: "11 Digit Mobile Number Required"
        }
    },
    Roll: {
        type: Number,
        // min: [6, `minum value 6 , maximum value 12, your value is {VALUE}`],
        // max: [12, `minum value 6 , maximum value 12, your value is {VALUE}`]
    },
    Class: { type: String, required: true },
    Remark: { type: String, default: "No Remark" }
}, { versionKey: false })
const productModel = mongoose.model("products", DataSchima);
module.exports = productModel;