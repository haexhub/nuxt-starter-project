import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { drizzle } from "drizzle-orm/postgres-js";

import postgres from "postgres";

let sql: postgres.Sql<{}> | null = null;
let database: PostgresJsDatabase<Record<string, unknown>> | null = null;

export const useDatabase = (migration = false) => {
  if (sql && database) return database;

  const config = useRuntimeConfig();
  const connectionUrl = `postgres://${config.database.username}:${config.database.password}@${config.database.domain}:${config.database.port}/${config.database.databaseName}`;

  sql = postgres(connectionUrl, { max: migration ? 1 : 10 });
  database = drizzle(sql);

  return database;
};
