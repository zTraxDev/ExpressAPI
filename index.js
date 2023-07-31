const express = require("express")
const dotenv = require("dotenv").config()
const db = require("./config/db")
const app = express()

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

db()
