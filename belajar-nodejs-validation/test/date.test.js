const Joi = require("joi");

describe("Joi", () => {
  it("should can validate date", () => {
    const birthDateSchema = Joi.date().required().max("now").min("1-1-1988");

    const result = birthDateSchema.validate("1-1-1987");
    console.info(result);

    const result1 = birthDateSchema.validate("1-1-1989");
    console.info(result1);

    const result2 = birthDateSchema.validate("1-1-1988");
    console.info(result2);
  });
});
