import { Router } from 'express';

// Controllers
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

// Middlewares
import authMiddlaware from './app/middlewares/auth';

const routes = new Router();

/* Routes */

routes.post('/sessions', SessionController.store);

routes.use(authMiddlaware);

routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);

export default routes;
