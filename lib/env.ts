import * as z from "zod";
import {
  PRIVATE_ENV_TYPES,
  PUBLIC_ENV_TYPES,
  RENAMED_PUBLIC_ENV,
} from "./env-constants";

const ENV_SCHEMA = z.object({
  ...PUBLIC_ENV_TYPES,
  ...PRIVATE_ENV_TYPES,
});

const ENV = ENV_SCHEMA.parse({
  ...process.env,
  ...RENAMED_PUBLIC_ENV,
});

export default ENV;
