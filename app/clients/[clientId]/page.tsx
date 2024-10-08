import { PageParams } from "@/components/types/next";
import { Button } from "@/components/ui/button";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const RoutePage = async (
  props: PageParams<{
    clientId: string;
  }>
) => {
  const prisma = new PrismaClient();
  const client = await prisma.clients.findUnique({
    where: { id: props.params.clientId },
  });

  return (
    <div className=" flex flex-col h-full gap-4 m-5">
      <Link href="/clients">
        <Button>Retour</Button>
      </Link>
      <div>{client?.companyName}</div>
    </div>
  );
};

export default RoutePage;
