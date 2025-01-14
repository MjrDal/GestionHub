"use server";

import { db } from "@/lib/db";
import { z } from "zod";
import { TachesSchema } from "./tachesSchema";

export const tachesAction = async (values: z.infer<typeof TachesSchema>) => {
  const validateFields = TachesSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title, designation, client } = validateFields.data;

  await db.taches.create({
    data: {
      title,
      designation,
      client,
    },
  });

  return { success: "La tache à été créer" };
};
