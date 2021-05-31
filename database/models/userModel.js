const User = (instance, dataTypes) => {
  return instance.define(
    "user",
    {
      id: {
        type: dataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: dataTypes.STRING(100),
      },
      password: {
        type: dataTypes.STRING(100),
      },
    },
    {
      tableName: "user",
      underscored: true,
    }
  );
};

module.exports = User;
