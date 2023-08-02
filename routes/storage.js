const express = require("express")
const router = express.Router()
const { uploadMiddleware }= require("../util/filesHandler")
const { createItem } = require("../controllers/StorageController")


router.post("/", uploadMiddleware.single("myfile"), createItem)


module.exports = router