import {Router} from 'express'
import {createAnswer} from '../controllers/answer.controller.js'
import {authRequired} from '../middlewares/validateToken.js'
import {rolRequired} from '../middlewares/validateRol.js'

const router = Router()

router.post('/createAnswer',createAnswer)

export default router