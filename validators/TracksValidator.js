const {check} = require("express-validator")
const { validatorResults } = require("../util/validatorHandle")

const validator_createItem = [
    check("name").exists().notEmpty(),
    check("album").exists().notEmpty(),
    check("cover").exists().notEmpty(),
    check("artist").exists().notEmpty(),
    check("artist.name").exists().notEmpty(),
    check("artist.nickname").exists().notEmpty(),
    check("artist.nationality").exists().notEmpty(),
    check("duration").exists().notEmpty(),
    check("duration.start").exists().notEmpty(),
    check("duration.end").exists().notEmpty(),
    check("mediaId").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return  validatorResults(req, res, next)
    }
]


const validator_getItem = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return  validatorResults(req, res, next)
    }
]



module.exports = {
    validator_createItem,
    validator_getItem
}