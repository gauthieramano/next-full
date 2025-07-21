"use server";

import { VALIDATION_SCHEMAS } from "@/lib/validation-schemas";
import { z } from "zod";

const { CONTACT_FORM: SCHEMA } = VALIDATION_SCHEMAS;

const transformZodErrors = (error: z.ZodError) =>
  error.issues.map(({ path, message }) => `[${path.join(".")}] ${message}`);

export async function submitContactForm(formData: FormData) {
  try {
    // fake a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    //validate the FormData
    const fields = SCHEMA.parse(Object.fromEntries(formData));

    console.log({ fields });

    // send validated data to database here

    return [];
  } catch (error) {
    if (error instanceof z.ZodError) {
      return transformZodErrors(error);
    }

    return [(error as Error).message];
  }
}
