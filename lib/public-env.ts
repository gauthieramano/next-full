import * as z from "zod";
import { PUBLIC_ENV_TYPES, RENAMED_PUBLIC_ENV } from "./env-constants";

const ENV_SCHEMA = z.object(PUBLIC_ENV_TYPES);

const PUBLIC_ENV = ENV_SCHEMA.parse(RENAMED_PUBLIC_ENV);

export default PUBLIC_ENV;
