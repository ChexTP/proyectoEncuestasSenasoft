import {Router} from 'express';
import { addSurvey, getAllSurveys,getSurveyByUser } from '../controllers/survey.controller.js'
import upload from '../lib/multerConfig.js';
import {authRequired} from '../middlewares/validateToken.js'
import {rolRequired} from '../middlewares/validateRol.js'

const router = Router();

router.post('/addSurvey',upload.single('image'), addSurvey);
router.get('/surveys',authRequired,rolRequired("admin"), getAllSurveys);
router.get('/surveysById',authRequired,rolRequired("admin"), getSurveyByUser);

export default router;