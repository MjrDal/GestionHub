import * as z from "zod";

export const ClientsSchema = z.object({
  code: z.string().min(1, { message: "type is requered" }),
  companyName: z.string().min(1, { message: "type is requered" }),
  companyDescription: z.string().min(1, { message: "type is requered" }),
  logo: z.string().min(1, { message: "type is requered" }),
  adresse: z.string().min(1, { message: "type is requered" }),
  postal: z.string().min(1, { message: "type is requered" }),
  city: z.string().min(1, { message: "type is requered" }),
  pays: z.string().min(1, { message: "type is requered" }),
  telephone: z.string().min(1, { message: "type is requered" }),
  email: z.string().min(1, { message: "type is requered" }),
  date: z.date(),
});
