import * as express from 'express';
import * as projectsController from '../controllers';

const router = express.Router();
router.get('/projects', projectsController.getProjects);

export default router;