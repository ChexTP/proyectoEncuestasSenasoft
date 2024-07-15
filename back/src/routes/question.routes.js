import {Router} from 'express'
import {createQuestion} from '../controllers/question.controller.js'
import {authRequired} from '../middlewares/validateToken.js'
import {rolRequired} from '../middlewares/validateRol.js'

const router = Router()

router.post('/createQuestion',createQuestion)

export default router