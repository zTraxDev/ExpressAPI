const mongoose = require("mongoose")

const StorageModel = new mongoose.Schema(
    {
        url: {type: String},
        filename: {type: String},

    },
    
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports = mongoose.model("storage", StorageModel)