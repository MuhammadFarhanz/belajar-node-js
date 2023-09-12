import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to do create many to many relation", async () => {
    const like = await prismaClient.like.create({
      data: {
        customer_id: "rully",
        product_id: "P0001",
      },
      include: {
        customer: true,
        product: true,
      },
    });

    console.info(like);
  });

  it("should be able to do find many to many relation", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "farhan",
      },
      include: {
        likes: {
          include: {
            product: true,
          },
        },
      },
    });

    console.info(JSON.stringify(customer));
  });

  it("should be able to do find many with many to many relation", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        likes: {
          some: {
            product: {
              name: {
                contains: "A",
              },
            },
          },
        },
      },
      include: {
        likes: {
          include: {
            product: true,
          },
        },
      },
    });

    console.info(JSON.stringify(customer));
  });

  it("should be able to create an implicit relation", async () => {
    const customer = await prismaClient.customer.update({
      where: {
        id: "rully",
      },
      data: {
        loves: {
          connect: [{ id: "P0001" }, { id: "P0002" }],
        },
      },
      include: {
        loves: true,
      },
    });

    console.info(JSON.stringify(customer));
  });

  it("should be able to find an implicit relation", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        loves: {
          some: {
            name: {
              contains: "A",
            },
          },
        },
      },
      include: {
        loves: true,
      },
    });

    console.info(customers);
  });
});
