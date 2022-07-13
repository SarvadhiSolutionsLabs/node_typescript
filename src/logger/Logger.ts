import { createLogger, format, transports } from 'winston';
import { DATE_FORMATE } from '../utils/dateFormat';

const logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5,
  silly: 6,
};

const transportsClone: any = transports;

const config = {
  // change level if in dev environment versus production
  levels: logLevels,
  format: format.combine(
    format.timestamp({
      format: DATE_FORMATE.TIMESTAMP,
    }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  exitOnError: false,
  transports: [
    new transportsClone.Console({
      level: process.env.LOGGER_LEVEL || 'silly',
      format: format.combine(
        format.colorize(),
        format.printf(
          info => `${info.timestamp} ${info.level}: ${info.message}`
        )
      ),
    }),
  ],
};

export const logger = createLogger(config);
