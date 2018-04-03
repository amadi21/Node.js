import express from 'express';
import {
  findAllUsers,
  createUser,
  deleteUser
} from "../controllers/userController";

const router = express.Router();

router.get('/', (req, res) => {
  findAllUsers().then((users) => {
    users.forEach(element => {
      element['password'] = undefined;
    });
    res.send(users);
  });
});

router.post('/', (req, res) => {
  if(!req.body.login || !req.body.email || !req.body.password) {
    res.status(422).send({message: 'Missing parameter login or email or password.'});
  }
  else {
    createUser(req.body.login, req.body.email, req.body.password).then((user) => {
      user['password'] = undefined;
      res.status(201).send(user);
    });
  }
});

router.delete('/:userId', (req, res) => {
  if(req.params.userId === null || req.params.userId === undefined) {
    res.status(422).send('Missing userId parameter.');
  }
  else {
    deleteUser(req.params.userId).then((user) => {
      res.status(204).send();
    });
  }
});

export default router;
