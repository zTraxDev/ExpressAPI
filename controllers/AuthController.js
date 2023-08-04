const { handleErrorHttp } = require("../util/handleError")
const { User } = require("../models/index")
const { matchedData} = require("express-validator")

/**
 * Register User
 */
const createRegister = async (req, res) => {
    try{
        req = matchedData(req)
        const body = req
        console.log(body)
        res.send({data: body})
    }catch(e){
        console.log(e)
        handleErrorHttp(res, "ERROR_REGISTER_USER", 404)
    }
}

module.exports = {
    createRegister
}