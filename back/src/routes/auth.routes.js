import {Router} from 'express'
import {register,login,logout,verifyToken} from '../controllers/auth.controller.js'

const router = Router()

router.post('/register',register)
router.post('/login',login)
router.post('/logout',logout)
router.post('/verifyToken',verifyToken)

export default router