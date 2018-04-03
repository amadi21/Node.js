const User = (sequelize, DataTypes) => {
  const UserModel = sequelize.define('user', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    login: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  return UserModel;
};

export default User;
