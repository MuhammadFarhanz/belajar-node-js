import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can execute sequential transaction", async () => {
    const [muhammad, farhan] = await prismaClient.$transaction([
      prismaClient.customer.create({
        data: {
          id: "muhammad",
          name: "Muhammad",
          email: "muhammad@.com",
          phone: "09887642342",
        },
      }),
      prismaClient.customer.create({
        data: {
          id: "farhan",
          name: "Farhan",
          email: "farhan@.com",
          phone: "098765523432",
        },
      }),
    ]);

    expect(muhammad.name).toBe("Muhammad");
    expect(farhan.name).toBe("Farhan");
  });
  it("should can execute interactive transaction", async () => {
    const [muhammad, farhan] = await prismaClient.$transaction(
      async (prisma) => {
        const muhammad = await prisma.customer.create({
          data: {
            id: "muhammad",
            name: "Muhammad",
            email: "muhammad@.com",
            phone: "09887642342",
          },
        });
        const farhan = await prisma.customer.create({
          data: {
            id: "farhan",
            name: "Farhan",
            email: "farhan@.com",
            phone: "098765523432",
          },
        });
        return [muhammad, farhan];
      }
    );

    expect(muhammad.name).toBe("Muhammad");
    expect(farhan.name).toBe("Farhan");
  });
});
