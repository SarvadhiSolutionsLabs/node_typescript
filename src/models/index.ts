import * as fs from 'fs';
import { logger } from '../logger/Logger';
import * as path from 'path';
import * as Sequelize from 'sequelize';
import { sequelize } from '../config/sequelize';

const basename = path.basename(module.filename);

const db = {};
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    logger.warn(file);
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
  })
  .forEach(function(file) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    // NOTE: you have to change from the original property notation to
    // index notation or tsc will complain about undefined property.
    db[model['name']] = model;
  });
Object.keys(db).forEach(function(modelName) {
  logger.silly(modelName);
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db['sequelize'] = sequelize;
db['Sequelize'] = Sequelize;

sequelize.sync();
export default db;
