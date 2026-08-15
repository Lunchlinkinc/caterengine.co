import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
export const applications = sqliteTable("applications",{
 id:integer("id").primaryKey({autoIncrement:true}),name:text("name").notNull(),email:text("email").notNull(),phone:text("phone").notNull(),restaurant:text("restaurant").notNull(),city:text("city").notNull(),state:text("state").notNull(),website:text("website"),revenue:text("revenue").notNull(),locations:text("locations").notNull(),goals:text("goals").notNull(),status:text("status").notNull().default("new"),createdAt:text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`)
});
