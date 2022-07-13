import express, { Express } from 'express';

import * as apiRoutes from './users.routes';
import * as adminRoutes from './admin.routes';
import appError from '../utils/errorHelper';
import { ErrorType } from '../utils/errorTypes';

export function initRoutes(app: Express) {

  app.use('/api/v1/user', apiRoutes.initRoutes(app, express.Router()));
  app.use('/api/v1/admin', adminRoutes.initRoutes(app, express.Router()));
  app.get('/', (req, res) => res.status(200).send({ message: 'Welcome to SARVADHI world!!' }));
  app.use('*', (req, res, next) => {
    try {
      throw new appError('path not found',ErrorType.not_found);
    } catch (error) {
      next(error);
    }
  });

}

