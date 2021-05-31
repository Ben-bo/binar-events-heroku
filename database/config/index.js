const Sequelize = require("sequelize");
const User = require("../models/userModel");
const Event = require("../models/eventModel");
// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  "db5vr7558m3atj",
  "ugykagabbyymul",
  "a1f455bdf62660e75f38cecccfc620d355cefbc73bebd73473679fd89ddd7a41",
  {
    host: "ec2-3-221-49-44.compute-1.amazonaws.com",
    dialect: "postgres",
    port: 5432,
    dialectOptions: {
      // Your pg options here
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);
sequelize
  .authenticate()
  .then((res) =>
    console.log("Connection has been established successfully. ", res)
  )
  .catch((err) => console.error("Unable to connect to the database:", err));

const userModel = User(sequelize, Sequelize.DataTypes);
const eventModel = Event(sequelize, Sequelize.DataTypes);
module.exports = {
  userModel,
  eventModel,
};
