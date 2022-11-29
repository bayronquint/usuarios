const {Router} = require('express')
const router = Router()
const { getAnchetas, postAnchetas, deleteAnchetas, putAnchetas, patchAnchetas } = require('../controller/usuarios')
const {validateCreate} = require('../validators/usuarios')

router.get('/',getAnchetas)
router.post('/', validateCreate, postAnchetas )
router.delete('/', deleteAnchetas )
router.put('/', putAnchetas )
router.patch('/', patchAnchetas )




module.exports = router