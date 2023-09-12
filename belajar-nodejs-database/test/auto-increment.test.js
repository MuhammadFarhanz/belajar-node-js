import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to do auto increment primary key", async () => {
    const category = await prismaClient.category.create({
      data: {
        name: "Food",
      },
    });

    console.info(category);
    expect(category).toHaveProperty("id");
  });
});
