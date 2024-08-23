import * as z from "zod";

export const NewClientSchema = z.object({
  number: z.string().min(1, { message: "number is requered" }),
  companyName: z.string().min(1, { message: "Company name is requered" }),
  companyDescription: z
    .string()
    .min(1, { message: "Company description is requered" }),
  contactName: z.string().min(1, { message: "Contact name is requered" }),
  contactEmail: z.string().email({ message: "Contact email is requered" }),
  contactPhoneNumber: z
    .string()
    .regex(/^\d+$/, { message: "Phone number must contain only digits" })
    .min(1, { message: "Phone number is required" }),
});

export const NewCdcSchema = z.object({
  number: z.string().min(1, { message: "number is requered" }),
  title: z.string().min(1, { message: "Title is requered" }),
  objectif: z.string().min(1, { message: "Company description is requered" }),
  publicVise: z.string().min(1, { message: "Public is requered" }),
  personas: z.string().min(1, { message: "Personna is requered" }),
  fonctionnalites: z.string().min(1, { message: "Fonctionnality is requered" }),
  structure: z.string().min(1, { message: "Structure is requered" }),
  charteGraphique: z
    .string()
    .min(1, { message: "Charte graphique is requered" }),
  maquette: z.string().min(1, { message: "Maquette is requered" }),
  technologie: z.string().min(1, { message: "technologie is requered" }),
  hebergement: z.string().min(1, { message: "hebergement is requered" }),
  maintenance: z.string().min(1, { message: "maintenance is requered" }),
  evolution: z.string().min(1, { message: "evolution is requered" }),
  budget: z.string().min(1, { message: "Budget is requered" }),
  delais: z.string().min(1, { message: "Délais is requered" }),
  client: z.string().min(1, { message: "number is requered" }),
});
