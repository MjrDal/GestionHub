import * as z from "zod";

export const DevisSchema = z.object({
  number: z.string().min(1, { message: "numeber is requered" }),
  indice: z.string().min(1, { message: "indice is requered" }),
  title: z.string().min(1, { message: "title is requered" }),
  designation: z.string().min(1, { message: "designation is requered" }),
});
