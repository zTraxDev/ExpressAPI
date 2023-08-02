const express = require("express")
const router = express.Router()
const { validator_createItem } = require("../validators/TracksValidator")
const { getItems, createItem } = require("../controllers/TrackController")

router.get("/", getItems)

router.post("/", validator_createItem, createItem)
module.exports = router