import * as dotenv from 'dotenv';
import { Dialect } from 'sequelize/types';

dotenv.config({ path: './.env' });

export const config = {
  development: {
    db_host: process.env.DB_HOSTNAME,
    secret: process.env.SECRET,
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USERNAME,
    db_password: process.env.DB_PASSWORD,
    db_driver: process.env.DB_DRIVER as Dialect,
    db_port: process.env.DB_PORT,
    port: process.env.PORT
  },
  test: {
    db_host: process.env.DB_HOSTNAME,
    secret: process.env.SECRET,
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USERNAME,
    db_password: process.env.DB_PASSWORD,
    db_driver: process.env.DB_DRIVER as Dialect,
    db_port: process.env.DB_PORT,
    port: process.env.PORT
  },
  production: {
    db_host: process.env.DB_HOSTNAME,
    secret: process.env.SECRET,
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USERNAME,
    db_password: process.env.DB_PASSWORD,
    db_driver: process.env.DB_DRIVER as Dialect,
    db_port: process.env.DB_PORT,
    port: process.env.PORT
  }
};