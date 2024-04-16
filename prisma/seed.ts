import { PrismaClient, members_gender } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const alice = await prisma.members.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Alice',
      gender: 'F',
      birth_date: "2004-04-16T00:00:00Z",
      payments: {
        create: {
          amount: 20000,
          paid_at: "2024-04-16T00:00:00Z",
        },
      },
    },
  })
  
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
