import { validateRequest } from './helper';
import Joi from 'joi';

export const createAccountSchema = (req, res, next) =>{
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    phone: Joi.string().length(10).required(),
  });
  validateRequest(req, next, schema);
};