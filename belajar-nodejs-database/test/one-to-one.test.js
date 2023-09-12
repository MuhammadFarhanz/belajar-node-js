import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to do one to one relation", async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        id: "rully",
        customer_id: "rully",
        balance: 100000,
      },
      include: {
        customer: true,
      },
    });
    console.info(wallet);
  });

  it("should be able to do one to one with relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "rully1",
        name: "rully1",
        email: "rully1@.com",
        phone: "20348025808532",
        wallet: {
          create: {
            id: "rully1",
            balance: 200000,
          },
        },
      },
      include: {
        wallet: true,
      },
    });
    console.info(customer);
  });

  it("should can find one to one relation", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "rully",
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });

  it("should can find one to one with relation filter", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        wallet: {
          isNot: null,
        },
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });
});
