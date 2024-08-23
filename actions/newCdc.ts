"use server";

import { db } from "@/lib/db";
import { NewCdcSchema } from "@/schemas";
import { z } from "zod";

export const newCdcAction = async (values: z.infer<typeof NewCdcSchema>) => {
  const validateFields = NewCdcSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const {
    number,
    title,
    objectif,
    publicVise,
    personas,
    fonctionnalites,
    structure,
    charteGraphique,
    maquette,
    technologie,
    delais,
    hebergement,
    maintenance,
    evolution,
    budget,
    client,
  } = validateFields.data;

  await db.cdc.create({
    data: {
      number,
      title,
      objectif,
      publicVise,
      personas,
      fonctionnalites,
      structure,
      charteGraphique,
      maquette,
      technologie,
      delais,
      hebergement,
      maintenance,
      evolution,
      budget,
      client: {
        connect: { id: client },
      },
    },
  });

  return { success: "New cdc created" };
};
