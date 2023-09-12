import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to create many records", async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: "farhan",
          name: "Muhammad Farhan",
          email: "farhan@gmail.com",
          phone: "0988173788",
        },
        {
          id: "budi",
          name: "Budi",
          email: "budi@gmail.com",
          phone: "09876555333",
        },
      ],
    });

    expect(count).toBe(2);
  });

  it("should be able to update many records", async () => {
    const { count } = await prismaClient.customer.updateMany({
      data: {
        email: "Budilagi@gmail.com",
      },
      where: {
        name: "Budi",
      },
    });
    expect(count).toBe(1);
  });

  it("should be able to delete many records", async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        name: "Tidak ada",
      },
    });
    expect(count).toBe(0);
  });

  it("should be able to read many records", async () => {
    const customers = await prismaClient.customer.findMany({});
    console.info(customers);
    expect(customers.length).toBe(2);
  });
});
