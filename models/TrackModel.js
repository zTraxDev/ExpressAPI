const mongoose = require("mongoose")

const TrackModel = new mongoose.Schema(
    {
        url: {type: String},
        filename: {type: String},

    },
    
    {
        timestamps: true,
        versionKey: false
    }
)