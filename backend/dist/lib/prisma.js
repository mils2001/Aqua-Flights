"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const client_1 = require("../generated/prisma/client");
const adapter_better_sqlite3_1 = require("@prisma/adapter-better-sqlite3");
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured");
}
const adapter = new adapter_better_sqlite3_1.PrismaBetterSqlite3({
    url: databaseUrl,
});
const prisma = new client_1.PrismaClient({
    adapter,
});
exports.default = prisma;
//# sourceMappingURL=prisma.js.map