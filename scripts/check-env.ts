import * as z from "zod";

const logAndExit = (exitCode: number, message: string) => {
  // Red if error, green otherwise
  const color = exitCode ? 31 : 32;

  console.log(`\x1b[${color}m%s\x1b[0m`, message);
  process.exit(exitCode);
};

const getZodErrors = (error: z.ZodError) =>
  error.issues.map(({ message }) => message).join("\n");

(async () => {
  try {
    await import("@/lib/env");

    logAndExit(0, "✅ Valid env variables\n");
  } catch (error) {
    const message = error instanceof z.ZodError ? getZodErrors(error) : error;

    logAndExit(1, `❌ Invalid env variables\n\n${message}`);
  }
})();
