"use server";

import { db } from "@/lib/db";
import { NewClientSchema } from "@/schemas";
import { z } from "zod";

export const newClientAction = async (
  values: z.infer<typeof NewClientSchema>
) => {
  const validateFields = NewClientSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const {
    number,
    companyName,
    companyDescription,
    contactName,
    contactEmail,
    contactPhoneNumber,
  } = validateFields.data;

  await db.clients.create({
    data: {
      number,
      companyName,
      companyDescription,
      contactName,
      contactEmail,
      contactPhoneNumber,
    },
  });

  return { success: "New client created" };
};
