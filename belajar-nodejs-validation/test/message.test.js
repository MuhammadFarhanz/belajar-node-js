const Joi = require("joi");

describe("Joi", () => {
  it("should can use custom message", () => {
    const schema = Joi.string().min(3).max(10).required().messages({
      "string.min": "{{#label}} panjang harus minimal {{#limit}} karakter",
      "string.max": "{{#label}} panjang harus maksimal {{#limit}} karakter",
    });

    const request = "aa";

    const result = schema.validate(request);
    console.info(result);
  });

  it("should can use custom message in obeject validation", () => {
    const schema = Joi.object({
      username: Joi.string().required().email().messages({
        "any.required": "{{#label}} harus diisi",
        "string.email": "{{#label}} harus valid email",
      }),
      password: Joi.string().required().min(6).max(10).messages({
        "any.required": "{{#label}} harus diisi",
        "string.min": "{{#label}} panjang harus minimal {{#limit}} karakter",
        "string.max": "{{#label}} panjang harus maksimal {{#limit}} karakter",
      }),
    });

    const request = {
      username: "farhan@gmail.com",
      password: "abcdefg",
    };

    const result = schema.validate(request, {
      abortEarly: false,
    });
    console.info(result);
  });
});
