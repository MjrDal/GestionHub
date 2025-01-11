import { PrismaClient } from "@prisma/client";
import { DevisForm } from "../[devisId]/detail/devisForm";

const RoutePage = async () => {
  const prisma = new PrismaClient();
  return (
    <div className=" flex flex-col h-full gap-4 m-5">
      <DevisForm />
    </div>
  );
};

export default RoutePage;
