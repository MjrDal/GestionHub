import { PrismaClient } from "@prisma/client";
import { ClientsForm } from "../[clientId]/detail/clientsForm";

const RoutePage = async () => {
  const prisma = new PrismaClient();
  return (
    <div className=" flex flex-col h-full gap-4 m-5">
      <ClientsForm />
    </div>
  );
};

export default RoutePage;
