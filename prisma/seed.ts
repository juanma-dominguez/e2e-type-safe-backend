import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.message.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.user.create({
    data: {
      name: 'Alice',
      messages: {
        create: [{ body: 'Hello World' }, { body: 'Hello World 2' }],
      },
    },
  });
  await prisma.user.create({
    data: {
      name: 'Mike',
      messages: {
        create: [{ body: 'Hello World' }, { body: 'Hello World 2' }],
      },
    },
  });
}
main();
