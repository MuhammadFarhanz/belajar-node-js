const Joi = require("joi");

describe("Joi", () => {
  it("should can create validation", () => {
    const registerSchema = Joi.object({
      username: Joi.string().required().min(3).max(100).email(),
      password: Joi.string()
        .required()
        .min(6)
        .max(100)
        .custom((value, helpers) => {
          if (value.startsWith("farhan")) {
            return helpers.error("password.wrong");
          }
          return value;
        })
        .messages({
          "password.wrong": "password can not start with farhan",
        }),
      confirmPassword: Joi.string().required().min(6).max(100),
    })
      .custom((value, helpers) => {
        if (value.password !== value.confirmPassword) {
          return helpers.error("register.password.different");
        }
      })
      .messages({
        "register.password.different":
          "password and confirmPassword is different",
      });

    const request = {
      username: "farhan@gmail.com",
      password: "abogoboga",
    };

    const result = registerSchema.validate(request, {
      abortEarly: false,
    });

    console.info(result);
  });
});
