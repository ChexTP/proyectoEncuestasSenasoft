import {Router} from 'express'
import { addTopic, getAllTopics} from '../controllers/topic.controller.js' 
import {authRequired} from '../middlewares/validateToken.js'
import {rolRequired} from '../middlewares/validateRol.js'

const router = Router()

router.post('/addTopic',authRequired,rolRequired("admin"),addTopic)
router.get('/allTopics', getAllTopics)

export default router