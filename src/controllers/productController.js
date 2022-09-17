const productModel = require("../models/productsModel")
// CRUD

// Create Student 
exports.InsertData = (req, res) => {
    const reqBody = req.body;
    productModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(404).json({ status: "Data NOt Found ", data: err })
        } else {
            res.status(201).json({ status: "Success ", data: data })
        }
    })
}
// Read Student
exports.ReadProduct = (req, res) => {
    const Query = {_id : "6325f75c21e1299c2ad6ed51"};
    const item = "Name Roll Class ";
    productModel.find(Query, item, (err, data) => {
        if (err) {
            res.status(404).json({ status: "Data Not Fouund ", data: err })
        } else {
            res.status(201).json({ status: "Success ", data: data })
        }
    })
}