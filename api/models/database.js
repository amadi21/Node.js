import config from '../../config/config';
import fs from 'fs';
import path from 'path';
import Sequelize, {DataTypes} from 'sequelize';

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
  host: 'localhost',
  dialect: 'mysql'
});
const db = {};

fs.readdirSync(__dirname).filter(file => {
  return (file.indexOf(".") !== 0) && (file !== "database.js");
}).forEach(file => {
  console.log(file);
  let model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
