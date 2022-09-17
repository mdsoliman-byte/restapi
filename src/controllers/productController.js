const productModel = require("../models/productsModel")
exports.InsertData = (req, res) => {
    const reqBody = req.body;
    productModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(404).json({ status: "Data NOt Found ", daat: err })
        } else {
            res.status(201).json({ status: "Success ", data: data })
        }

    })


}
