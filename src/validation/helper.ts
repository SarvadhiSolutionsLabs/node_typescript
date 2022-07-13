import appError from '../utils/errorHelper';
import { ErrorType } from '../utils/errorTypes';

export const validateRequest = (req, next, schema) =>{
  const options = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true // remove unknown props
  };
  const { error, value } = schema.validate(req.body, options);
  if (error) {
    // next(error);
    throw new appError(`Validation error: ${error.details.map(x => x.message).join(', ')}`, ErrorType.invalid_request);
  } else {
    req.body = value;
    next();
  }
};