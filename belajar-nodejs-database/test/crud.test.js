import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to create customers", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "farhan1",
        name: "Farhan1",
        email: "farhanlagi1@gmail.com",
        phone: "098817378801",
      },
    });

    expect(customer.id).toBe("farhan1");
    expect(customer.name).toBe("Farhan1");
    expect(customer.email).toBe("farhanlagi1@gmail.com");
    expect(customer.phone).toBe("098817378801");
  });

  it("should be able to update customers", async () => {
    const customer = await prismaClient.customer.update({
      data: {
        name: "Farhan",
      },
      where: {
        id: "1",
      },
    });

    expect(customer.id).toBe("1");
    expect(customer.name).toBe("Farhan");
    expect(customer.email).toBe("farhan@gmail.com");
    expect(customer.phone).toBe("0988173788");
  });

  it("should be able to read customers", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "1",
      },
    });

    expect(customer.id).toBe("1");
    expect(customer.name).toBe("Farhan");
    expect(customer.email).toBe("farhan@gmail.com");
    expect(customer.phone).toBe("0988173788");
  });

  it("should be able to delete customers", async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: "1",
      },
    });

    expect(customer.id).toBe("1");
    expect(customer.name).toBe("Farhan");
    expect(customer.email).toBe("farhan@gmail.com");
    expect(customer.phone).toBe("0988173788");
  });
});
