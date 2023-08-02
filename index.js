const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")
const db = require("./config/db")
const app = express()

/** 
 * - Aqui invocamos las rutas del router
*/
app.use(cors())
app.use(express.json())
app.use(express.static("storage"))
app.use("/api", require("./routes"))

app.listen(process.env.PORT, () => {
    db()
    console.log(`Server is running on port ${process.env.PORT}`)
})

