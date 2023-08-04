const mongoose = require("mongoose")
const MongooseDelete = require("mongoose-delete")

const StorageModel = new mongoose.Schema(
    {
        url: {
            type: String
        },
        filename: {type: String},

    },
    
    {
        versionKey: false,
        timestamps: true,
    }
)

StorageModel.plugin(MongooseDelete, {
    overrideMethods: "all"
})
module.exports = mongoose.model("storage", StorageModel)