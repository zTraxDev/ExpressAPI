const mongosee = require("mongoose")
const MongooseDelete = require("mongoose-delete")
const UserModel = new mongosee.Schema(
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
    versionKey: false,
    timestamps: true,
}

)

UserModel.plugin(MongooseDelete, {
    overrideMethods: "all"
})
module.exports = mongosee.model("user", UserModel)
