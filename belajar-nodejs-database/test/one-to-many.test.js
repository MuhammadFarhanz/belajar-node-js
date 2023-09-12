import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to do insert and include", async () => {
    const comment = await prismaClient.comment.create({
      data: {
        customer_id: "farhan",
        title: "Insert Comment",
        description: "Description Comment",
      },
      include: {
        customer: true,
      },
    });

    console.info(comment);
  });

  it("should be able to do insert and many relation", async () => {
    const comment = await prismaClient.customer.create({
      data: {
        id: "alex",
        name: "alex",
        email: "alex@.com",
        phone: "043294824",
        comment: {
          createMany: {
            data: [
              {
                title: "comment 1",
                description: "Description 1",
              },
              {
                title: "comment 2",
                description: "Description 2",
              },
            ],
          },
        },
      },
      include: {
        comment: true,
      },
    });

    console.info(comment);
  });

  it("should be able to do find in many relation", async () => {
    const comment = await prismaClient.customer.findMany({
      where: {
        comment: {
          some: {
            title: {
              contains: "Comment",
            },
          },
        },
      },
      include: {
        comment: true,
      },
    });

    console.info(comment);
  });
});
