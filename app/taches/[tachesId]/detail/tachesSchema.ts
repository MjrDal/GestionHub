import * as z from "zod";

export const TachesSchema = z.object({
  title: z.string().min(1, { message: "type is requered" }),
  designation: z.string().min(1, { message: "type is requered" }),
  client: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});
