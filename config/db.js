const mongoose = require("mongoose")


module.exports =  async () => {
    try {
        const db_uri = process.env.MONGO_URI
        await  mongoose.connect(db_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Connected to MongoDB Database ✔️")
    } catch (error) {
        console.log(error)
    }
}


