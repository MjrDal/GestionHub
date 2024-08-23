import { PageParams } from "@/components/types/next";
import { PrismaClient } from "@prisma/client";

const RoutePage = async (
  props: PageParams<{
    cdcId: string;
    clientId: string;
  }>
) => {
  const prisma = new PrismaClient();
  const cdc = await prisma.cdc.findUnique({
    where: { id: props.params.cdcId },
  });
  const client = await prisma.clients.findUnique({
    where: { id: props.params.clientId },
  });

  return (
    <div className=" flex flex-col h-full gap-4 m-5">
      <div>Id du cahier des charges:{cdc?.id}</div>
      <div>Id du client :{client?.id}</div>
    </div>
  );
};

export default RoutePage;
