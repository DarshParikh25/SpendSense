// for app queries
// Neon + Drizzle connection

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "@/db/schema/index";

const sql = neon(process.env.DATABASE_URL);

export const db = drizzle({ client: sql, schema });
