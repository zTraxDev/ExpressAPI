const { validationResult } = require("express-validator")


const validatorResults = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch(err){
        res.status(403)
        return res.send({err: err.array()})
    }
}

module.exports = {
    validatorResults
};
