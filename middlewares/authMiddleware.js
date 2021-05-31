const joi = require("joi");

const authMiddleware = {
  authValidation: (req, res, next) => {
    const schema = joi
      .object({
        username: joi.string().min(5).max(20).required(),
        password: joi.string().required(),
      }) //kolom apa saja yang akan di cek validasinya
      .options({
        abortEarly: false,
      }); //memvalidasi semua kolom inputan,kemudian abort(tampilkan pesan kesalahan)
    const validate = schema.validate(req.body);
    if (validate.error) {
      res.send({
        status: 500,
        message: "data not complete",
        data: validate.error.details,
      });
    }
    next();
  },
};

module.exports = authMiddleware;
