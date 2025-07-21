"use server";

import { fetchMutation } from "convex/nextjs";
import * as z from "zod";
import { api } from "@/convex/_generated/api";
import { VALIDATION_SCHEMAS } from "@/lib/validation-schemas";

const { CONTACT_FORM: SCHEMA } = VALIDATION_SCHEMAS;

const getZodErrors = (error: z.ZodError) =>
  error.issues.map(({ path, message }) => `[${path.join(".")}] ${message}`);

export async function submitContactForm(formData: FormData) {
  try {
    //validate the FormData
    const fields = SCHEMA.parse(Object.fromEntries(formData));

    await fetchMutation(api.contact.form.addOne, fields);

    return [];
  } catch (error) {
    if (error instanceof z.ZodError) {
      return getZodErrors(error);
    }

    return [(error as Error).message];
  }
}
