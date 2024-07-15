import {Router} from 'express'
import {createQuestion,getAllCuestionBySurvey} from '../controllers/question.controller.js'
import {authRequired} from '../middlewares/validateToken.js'
import {rolRequired} from '../middlewares/validateRol.js'

const router = Router()

router.post('/createQuestion',authRequired,rolRequired("admin"),createQuestion)
router.get('/questionBySurvey',authRequired,rolRequired("admin"),getAllCuestionBySurvey)


export default router