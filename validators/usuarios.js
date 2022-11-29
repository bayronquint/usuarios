const { check } = require('express-validator')
const { validationResult } = require('express-validator')

const validateResult = (req, res, next) => {
    try{
        validationResult(req).throw()
        return next()
    } catch (err){
        res.status(403)
        res.send({ errors: err.array() })
    }
}

const validateCreate = [
    check('correo')
        .exists()
        .not()
        .isEmpty(),
    check('password')
        .exists()
        .not()
        .isEmpty(),
    check('estado')
        .exists()
        .not()
        .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateResult }
module.exports = { validateCreate }