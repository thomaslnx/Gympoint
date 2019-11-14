import { Router } from 'express';

import authMiddleware from './app/middleware/auth';

import UserController from './app/controllers/UserController';
import StudentsController from './app/controllers/StudentsController';
import SessionController from './app/controllers/SessionController';
import WorkoutPlansController from './app/controllers/WorkoutPlansController';
import StudentsSubscriptionController from './app/controllers/StudentsSubscriptionController';

const routes = new Router();

routes.use(authMiddleware);
routes.post('/users', UserController.store);
routes.post('/students', StudentsController.store); // rota para somente admins cadastrados
routes.post('/sessions', SessionController.store);

routes.post('/workouts', WorkoutPlansController.store);
routes.get('/workouts', WorkoutPlansController.index);
routes.put('/workouts/:id', WorkoutPlansController.update);
routes.delete('/workouts/:id', WorkoutPlansController.delete);

routes.post('/studentsubscription', StudentsSubscriptionController.store);

export default routes;
