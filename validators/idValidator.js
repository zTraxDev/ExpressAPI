const { check } = require("express-validator")
const { validatorResults }  = require("../util/validatorHandle")

const validateId = [
    check("id").exists().notEmpty().isMongoId().withMessage("I need ID"),
    (req, res, next) => {
        validatorResults(req, res, next)
    }
]

module.exports = {
    validateId
}