import * as z from "zod";

export const TachesSchema = z.object({
  title: z.string().min(1, { message: "title is requered" }),
  designation: z.string().min(1, { message: "designation is requered" }),
  client: z.string().min(1, { message: "client is requered" }),
});
