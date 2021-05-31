const authService = require("../services/authService");

const authController = {
  create: async (req, res) => {
    try {
      let status = 200;
      let message = "OK";
      let data = {};

      const { data: userCreated, error } = await authService.createService(
        req.body
      );
      if (error !== null) {
        (status = 500), (message = "username already registered");
      }
      res.send({
        status,
        message,
        data: userCreated || data,
      });
    } catch (error) {
      console.log(error);
      res.send({ status: 500, message: "failed", data: error });
    }
  },
  login: async (req, res) => {
    try {
      let status = 200;
      let message = "OK";
      let data = {};

      const { data: token, error } = await authService.loginService(req.body);
      if (error !== null) {
        (status = 500), (message = error);
      }

      res.send({
        status,
        message,
        data: {
          token,
        },
      });
    } catch (error) {
      console.log(error);
      res.send({ status: 500, message: "failed", data: error });
    }
  },
};
module.exports = authController;
