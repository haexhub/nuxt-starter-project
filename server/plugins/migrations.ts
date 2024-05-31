import { consola } from "consola";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { useDatabase } from "@/server/utils/database";
import drizzleConfig from "@/drizzle.config";

export default defineNitroPlugin(async () => {
  if (!import.meta.dev || !drizzleConfig.out) return;

  const databaseMigration = useDatabase(true);

  try {
    await migrate(databaseMigration, { migrationsFolder: drizzleConfig.out });
    consola.success("Database migrations done");
  } catch (error) {
    consola.error("Database migrations failed", error);
  }
});
