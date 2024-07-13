import {Router} from 'express';
import {addSurvey} from '../controllers/survey.controller.js'
import upload from '../lib/multerConfig.js';
import {authRequired} from '../middlewares/validateToken.js'
import {rolRequired} from '../middlewares/validateRol.js'

const router = Router();

router.post('/addSurvey',authRequired,rolRequired('admin'),upload.single('image'), addSurvey);

export default router;