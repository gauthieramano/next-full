"use server";

import { CONTACT_FORM_SCHEMA } from "@/lib/validation-schemas";
import { z } from "zod";

const transformZodErrors = (error: z.ZodError) =>
  error.issues.map((issue) => ({
    path: issue.path.join("."),
    message: issue.message,
  }));

export async function submitForm(formData: FormData) {
  try {
    // fake a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    //validate the FormData
    const validatedFields = CONTACT_FORM_SCHEMA.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    console.log({ validatedFields });

    // send validated data to database here

    return {
      errors: null,
      data: "data received and mutated",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        errors: transformZodErrors(error),
        data: null,
      };
    }

    return {
      errors: {
        message: "An unexpected error occurred. Could not create shelf.",
      },
      data: null,
    };
  }
}
