import {Router} from 'express';
import { addSurvey, getAllSurveys } from '../controllers/survey.controller.js'
import upload from '../lib/multerConfig.js';
import {authRequired} from '../middlewares/validateToken.js'
import {rolRequired} from '../middlewares/validateRol.js'

const router = Router();

router.post('/addSurvey',authRequired,rolRequired('admin'),upload.single('image'), addSurvey);
router.get('/surveys', getAllSurveys);

export default router;