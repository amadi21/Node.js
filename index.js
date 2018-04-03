import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import db from './api/models/database';
import userRouting from './api/routes/userRouting';
import loginRouting from './api/routes/loginRouting';

const app = express();
app.use(helmet());
app.use(bodyParser.json());

app.use('/users', userRouting);
app.use('/login', loginRouting);

db.sequelize.sync().then(() => {
  db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(3100, () => {
      console.log('App listening on port 3100.');
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database: ', err);
  });
});