const {Router} = require ('express')
const {login} = require ('../controller/auth')

const router = Router()

router.get('/login', login)
router.post('/login', login)

module.exports = router