import { Router } from 'express';

import authMiddleware from './app/middleware/auth';

import UserController from './app/controllers/UserController';
import StudentsController from './app/controllers/StudentsController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/students', authMiddleware, StudentsController.store); // rota para somente admins cadastrados
routes.post('/sessions', SessionController.store);

export default routes;
