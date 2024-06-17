import Joi from "joi";

export const registerValidation = Joi.object({
  username: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().max(50).required(),
  password: Joi.string().min(6).required(),
  password_confirmation: Joi.string().valid(Joi.ref("password")).required().message({
    "any.only": "Password confirmation must match password",
  }),
});

export const loginValidation = Joi.object({
  usernameOrEmail: Joi.string().max(50).required(),
  password: Joi.string().min(6).required(),
});
