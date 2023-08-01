const express = require("express")
const dotenv = require("dotenv").config()
const db = require("./config/db")
const app = express()

/** 
 * - Aqui invocamos las rutas del router
*/
app.use(express.json())
app.use("/api", require("./routes"))

app.listen(process.env.PORT, () => {
    db()
    console.log(`Server is running on port ${process.env.PORT}`)
})

