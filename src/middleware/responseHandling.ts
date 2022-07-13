import { logger } from '../logger/Logger';
export default function (req, res, next) {
  logger.info(`${res.statusCode} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  next();
}