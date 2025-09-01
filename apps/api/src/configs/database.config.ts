import { type ConfigType, registerAs } from "@nestjs/config";

export const databaseConfig = registerAs("database", () => ({
	uri: process.env.DATABASE_URI,
	name: process.env.DATABASE_NAME,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
}));

export type IDatabaseConfig = ConfigType<typeof databaseConfig>;
