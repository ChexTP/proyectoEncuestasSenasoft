import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname} from 'path';

import authRoutes from './routes/auth.routes.js'
import topicRoutes from './routes/topic.routes.js'
import surveyRoutes from './routes/survey.routes.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser())
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use("/api", authRoutes);
app.use("/api/topic",topicRoutes)
app.use("/api/survey",surveyRoutes)

export default app