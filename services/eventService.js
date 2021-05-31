const { eventModel } = require("../database/config");
const eventService = {
  createService: async (payload) => {
    try {
      const event = {
        user_id: payload.decodedToken.id,
        name: payload.name,
        description: payload.description,
      };
      let error = null;
      let result = await eventModel.create(event);

      return {
        data: result,
        error,
      };
    } catch (error) {
      return error;
    }
  },
  getService: async () => {
    try {
      let error;
      let result = await eventModel.findAll();

      return {
        data: result,
        error,
      };
    } catch (error) {
      return error;
    }
  },
};
module.exports = eventService;
