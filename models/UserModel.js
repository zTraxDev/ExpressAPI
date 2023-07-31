const mongosee = require("mongoose")

const user = new mongosee.Schema(
{
    name: {type: String},
    age: {type: Number},
    email:{ type: String, unique: true},
    password: {type: String},
    role: {
        type: ["user", "admin"],
        default: "user",
    },

},

{
    timestamps: true,
    versionKey: false
}

)

module.exports = mongosee.model("user", user)
