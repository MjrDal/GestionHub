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

  const clientConnectArray = client.map((themeId) => ({
    id: themeId,
  }));

  await db.taches.create({
    data: {
      title,
      designation,
      client: {
        connect: clientConnectArray,
      },
    },
  });

  return { success: "Groupement created" };
};
