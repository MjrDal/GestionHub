"use server";

import { db } from "@/lib/db";
import { z } from "zod";
import { ClientsSchema } from "./clientsSchema";

export const clientsAction = async (values: z.infer<typeof ClientsSchema>) => {
  const validateFields = ClientsSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const {
    code,
    companyName,
    companyDescription,
    logo,
    adresse,
    postal,
    city,
    pays,
    telephone,
    email,
    date,
  } = validateFields.data;

  await db.clients.create({
    data: {
      code,
      companyName,
      companyDescription,
      logo,
      adresse,
      postal,
      city,
      pays,
      telephone,
      email,
      date,
    },
  });

  return { success: "Le client à été créer" };
};
