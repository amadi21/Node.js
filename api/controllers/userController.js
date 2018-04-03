import db from '../models/database';

const findAllUsers = () => {
  return db.sequelize.models.user.findAll();
};

const createUser = (login, email, password) => {
  return db.sequelize.models.user.create({
    'login': login,
    'email': email,
    'password': password
  });
};

const deleteUser = (userId) => {
  return db.sequelize.models.user.destroy({
    where: {
      'id': userId
    }
  });
};

const loginUser = (login, password) => {
  return db.sequelize.models.user.find({
    where: {
      'login': login
    }
  });
};

export {
  findAllUsers,
  createUser,
  deleteUser,
  loginUser
}
