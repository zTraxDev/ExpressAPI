const {check} = require("express-validator")
const { validatorResults } = require("../util/validatorHandle")

const validator_createItem = [
    check("name").exists().notEmpty(),
    check("album").exists().notEmpty(),
    check("cover").exists().notEmpty(),
    check("artis").exists().notEmpty(),
    check("artis.name").exists().notEmpty(),
    check("artis.nickname").exists().notEmpty(),
    check("artis.nationality").exists().notEmpty(),
    check("duration").exists().notEmpty(),
    check("duration.start").exists().notEmpty(),
    check("duration.end").exists().notEmpty(),
    check("mediaId").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return  validatorResults(req, res, next)
    }
]



module.exports = {
    validator_createItem
}