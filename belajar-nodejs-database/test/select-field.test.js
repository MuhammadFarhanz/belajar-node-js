import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able create and select field", async () => {
    const customers = await prismaClient.customer.create({
      data: {
        id: "rully",
        name: "rully",
        email: "rully@.com",
        phone: "109428398295832",
      },
      select: {
        id: true,
        name: true,
      },
    });

    expect(customers.id).toBe("rully");
    expect(customers.name).toBe("rully");
    expect(customers.email).toBeUndefined();
    expect(customers.phone).toBeUndefined();
  });

  it("should be able select fields", async () => {
    const customers = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    for (const customer of customers) {
      expect(customer.id).toBeDefined();
      expect(customer.name).toBeDefined();
      expect(customers.email).toBeUndefined();
      expect(customers.phone).toBeUndefined();
    }
  });
});
