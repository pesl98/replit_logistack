import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  name: text("name").notNull(),
  company: text("company").notNull(),
  role: text("role").notNull().default("client"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull(),
  message: text("message").notNull(),
});

// User schemas
export const insertUserSchema = createInsertSchema(users).pick({
  email: true,
  password: true,
  name: true,
  company: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

// Contact schemas
export const insertContactSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  company: true,
  message: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

// Export types
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contactSubmissions.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;