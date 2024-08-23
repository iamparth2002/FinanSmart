import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:1obrt2TXgCsQ@ep-restless-snowflake-a1ujex6k.ap-southeast-1.aws.neon.tech/ai-expense-tracker?sslmode=require"
);
export const db = drizzle(sql, { schema });
