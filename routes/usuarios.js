const {Router} = require('express')
const router = Router()

const { getUsuarios, postUsuarios} = require('../controller/usuarios')
const {validateCreate} = require('../validators/usuarios')

router.get('/',getUsuarios)
router.post('/', validateCreate, postUsuarios )




module.exports = router