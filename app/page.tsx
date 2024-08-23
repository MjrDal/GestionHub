import { Aside } from "@/components/aside/Aside";
import { Pdf } from "@/components/pdf/Pdf";
import { PrismaClient } from "@prisma/client";

export default async function Home() {
  const prisma = new PrismaClient();
  const clients = await prisma.clients.findMany();
  return (
    <main className="">
      <Aside clients={clients} />
      <Pdf />
    </main>
  );
}
