const express = require("express")
const { matchedData} = require("express-validator")
const { authValidator } = require("../validators/authValidator")
const { createRegister } = require("../controllers/AuthController")
const router = express.Router()

/**
 * Create User
 */
router.post("/register", authValidator, createRegister)

/**
 * Login User
 */


module.exports = router