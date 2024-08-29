import { GraphDevis } from "@/components/dashboard/graphDevis";
import { GraphFacture } from "@/components/dashboard/graphFactures";
import { ListDevis } from "@/components/dashboard/listDevis";
import { ListFactures } from "@/components/dashboard/listFactures";
import { Projects } from "@/components/dashboard/projects";
import { Taches } from "@/components/dashboard/taches";
import { PrismaClient } from "@prisma/client";

export default async function Home() {
  const prisma = new PrismaClient();
  const clients = await prisma.clients.findMany();
  return (
    <main className="bg-[#D9D9D9] p-8 flex flex-row justify-center gap-8 ">
      <div className="grid grid-cols-2 gap-4">
        <GraphDevis />
        <GraphFacture />
        <ListDevis />
        <ListFactures />
      </div>
      <div className=" flex flex-row gap-4">
        <Projects />
        <Taches />
      </div>
    </main>
  );
}
