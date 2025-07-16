import * as z from "zod";

export const CONTACT_FORM_SCHEMA = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  message: z.string().trim().min(1, "Message is required"),
});
