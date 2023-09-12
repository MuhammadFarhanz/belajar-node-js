import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to do paging", async () => {
    const customers = await prismaClient.customer.findMany({
      skip: 0,
      take: 5,
      orderBy: [{ name: "desc" }, { email: "asc" }],
    });

    console.info(customers);
  });
});
