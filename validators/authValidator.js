const { check } = require("express-validator")
const { validatorResults } = require("../util/validatorHandle")

const authValidator = [
    check("name").exists().notEmpty().isLength({max:50}),
    check("age").exists().notEmpty().isNumeric({max:99}),
    check("email").exists().notEmpty().isLength({max:100}),
    check("password").exists().notEmpty().isLength({min:8, max:100}),
    (req, res, next) =>{
        return validatorResults(req, res, next)
    }
]


const loginValidator = [
    check("email").exists().notEmpty(),
    check("password").exists().notEmpty(),
    (req, res, next) =>{
        return validatorResults(req, res, next)
    }
]


module.exports = {
    authValidator,
    loginValidator
}