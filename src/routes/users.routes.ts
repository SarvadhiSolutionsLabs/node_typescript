import { createAccountSchema } from '../validation/user.validation';
import { verifyJWT_MW } from '../config/middlewares';
import { END_POINT } from '../constant/endpoint';
import { UsersController, RegistrationController, SessionController } from '../controllers/users';

export function initRoutes(app, router) {

  const apiRoute = router;
  const users = new UsersController();
  const registration = new RegistrationController();
  const session = new SessionController();

  apiRoute.get('/', (req, res) => res.status(200).send({ message: 'Api Server is running!' }));
  apiRoute.post(END_POINT.LOGIN, session.login);
  apiRoute.post(END_POINT.SIGNUP,createAccountSchema, registration.signup);

  apiRoute.route('*').all(verifyJWT_MW);

  apiRoute.get(END_POINT.GET_USER, users.list);
  return apiRoute;
}