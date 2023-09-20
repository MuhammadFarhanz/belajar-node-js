const Joi = require("joi");

describe("Joi", () => {
  it("should can create schema", () => {
    const schema = Joi.string().min(5).max(100).required();

    const result = schema.validate("Farhan");

    if (result.error) {
      console.info(result.error);
    }
  });

  it("should can validate basic data", () => {
    const usernameSchema = Joi.string().email().required();
    const isAdminSchema = Joi.boolean().required();
    const priceSchema = Joi.number().min(1000).max(1000000);

    const resultUsername = usernameSchema.validate("farhan@gmail.com");
    console.info(resultUsername);

    const resultIsAdmin = isAdminSchema.validate("true");
    console.info(resultIsAdmin);

    console.info(typeof "true");
    console.info(typeof resultIsAdmin.value);
    console.info(typeof resultIsAdmin.error);

    const resultPrice = priceSchema.validate(10000);
    console.info(resultPrice);
  });
});
