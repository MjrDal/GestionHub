"use server";

import { db } from "@/lib/db";
import { z } from "zod";
import { DevisSchema } from "./devisSchema";

export const devisAction = async (values: z.infer<typeof DevisSchema>) => {
  const validateFields = DevisSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { number, indice, title, designation } = validateFields.data;

  await db.devis.create({
    data: {
      number,
      indice,
      title,
      designation,
    },
  });

  return { success: "Le devis à été créer" };
};
