"use server";

import { db } from "@/lib/db";
import { StatusDevis } from "@prisma/client";

export const dropDownMenuDevisAction = async (values: {
  id: string;
  text: string;
}) => {
  const { id, text } = values;
  await db.devis.update({
    where: { id },
    data: { status: text as StatusDevis },
  });

  return { success: "Le devis à été modifier" };
};
