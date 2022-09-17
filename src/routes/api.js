const express = require("express")
const productController = require("../controllers/productController")
const router = express.Router()



router.get("/hello", productController.InsertData)



module.exports = router;