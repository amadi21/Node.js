import express from 'express';
import {
  loginUser
} from "../controllers/userController";

const router = express.Router();

router.post('/', (req, res) => {
  if(!req.body.login || !req.body.password) {
    res.status(422).send({message: 'Missing parameter login or password.'});
  }
  else {
    loginUser(req.body.login, req.body.password).then((user) => {
      res.status(200).send({message: "Everything OK."});
    });
  }
});

export default router;
