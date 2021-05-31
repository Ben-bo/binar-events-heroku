const eventService = require("../services/eventService");
const eventController = {
  create: async (req, res) => {
    try {
      let status = 200;
      let message = "Ok";
      let data = {};

      const { data: eventCreate, error } = await eventService.createService(
        req.body
      );

      res.send({
        status,
        message,
        data: eventCreate || data,
      });
    } catch (error) {
      res.send({
        status: 500,
        message: "failed",
        data: error,
      });
    }
  },
  get: async (req, res) => {
    try {
      let status = 200;
      let message = "ok";
      let data = {};

      const { data: events, error } = await eventService.getService();

      res.send({
        status,
        message,
        data: events || data,
      });
    } catch (error) {
      res.send({
        status: 500,
        message: "failed",
        data: error,
      });
    }
  },
};

module.exports = eventController;
