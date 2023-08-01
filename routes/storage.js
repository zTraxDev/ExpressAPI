const express = require("express")
const router = express.Router()
const { uploadMiddleware }= require("../util/filesHandler")


router.post("/", uploadMiddleware.single("myfile"),(req, res) => {
    res.send({a: 1})
})


module.exports = router