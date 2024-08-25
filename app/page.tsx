import { PrismaClient } from "@prisma/client";

export default async function Home() {
  const prisma = new PrismaClient();
  const clients = await prisma.clients.findMany();
  return <main className=""></main>;
}
