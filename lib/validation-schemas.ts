import * as z from "zod";

export const VALIDATION_SCHEMAS = {
  CONTACT_FORM: z.object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.email("Invalid email address"),
    message: z.string().trim().min(1, "Message is required"),
  }),
};
