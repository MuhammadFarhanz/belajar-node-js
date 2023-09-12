import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to do count", async () => {
    const total = await prismaClient.customer.count({
      where: {
        name: "rully",
      },
    });

    expect(total).toBe(1);
  });
});
