import {Router} from 'express'
import {addTopic} from '../controllers/topic.controller.js' 
import {authRequired} from '../middlewares/validateToken.js'
import {rolRequired} from '../middlewares/validateRol.js'

const router = Router()

router.post('/addTopic',authRequired,rolRequired("admin"),addTopic)

export default router