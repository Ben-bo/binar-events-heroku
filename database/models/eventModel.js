const Event = (instance, dataTypes) => {
  return instance.define(
    "event",
    {
      id: {
        type: dataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: dataTypes.STRING(100),
      },
      name: {
        type: dataTypes.STRING(100),
      },
      description: {
        type: dataTypes.STRING(100),
      },
    },
    {
      tableName: "event",
      underscored: true,
    }
  );
};

module.exports = Event;
