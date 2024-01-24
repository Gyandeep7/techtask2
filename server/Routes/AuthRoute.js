const { Signup, Login } = require('../controllers/AuthController')
const { userVerificatiion } = require('../Middlewares/AuthMiddleware')
const router = require('express').Router()

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/',()=>{
    console.log('test')
})

module.exports = router