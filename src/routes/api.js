const express = require("express")
const productController = require("../controllers/productController")
const router = express.Router()



router.post("/InsertData", productController.InsertData)
router.get("/ReadProduct", productController.ReadProduct)
router.post("/UpdateProduct/:id", productController.UpdateProduct)
router.post("/DeleteProduct/:id", productController.DeleteProduct)



module.exports = router;