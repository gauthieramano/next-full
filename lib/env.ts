import * as z from "zod";

const ENV_SCHEMA = z.object({
  // CONVEX
  CONVEX_DEPLOYMENT: z.string(),
  NEXT_PUBLIC_CONVEX_URL: z.url(),

  // CLERK
  NEXT_PUBLIC_CLERK_FRONTEND_API_URL: z.url(),
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
  CLERK_SECRET_KEY: z.string(),
});

export const ENV = ENV_SCHEMA.parse(process.env);
