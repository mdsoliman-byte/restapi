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
// read  Student
exports.ReadProduct = (req, res) => {
    const Query = { _id: "6325f75c21e1299c2ad6ed51" };
    const item = "Name Roll Class ";
    productModel.find(Query, item, (err, data) => {
        if (err) {
            res.status(404).json({ status: "Data Not Fouund ", data: err })
        } else {
            res.status(201).json({ status: "Success ", data: data })
        }
    })
}

// Update  Student
exports.UpdateProduct = (req, res) => {
    const id = req.params.id;
    const Qurey = { _id: id };
    const reqBody = req.body;
    productModel.updateOne(Qurey, reqBody, (err, data) => {
        if (err) {
            res.status(404).json({ status: "Fail", data: err })
        } else {
            res.status(200).json({ status: "Success Update ", data: data })
        }
    })
}

// Delete Product 
exports.DeleteProduct = (req, res) => {
    const id = req.params.id;
    const Query = { _id: id }
    productModel.remove(Query, (err, data) => {
        if (err) {
            res.status(404).json({ status: "Fail", data: err })
        } else {
            res.status(200).json({ status: "Success Update ", data: data })
        }
    })
}