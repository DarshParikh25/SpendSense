import {
  boolean,
  date,
  numeric,
  pgEnum,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { users } from "./users";
import { accounts } from "./accounts";

export const transactionTypeEnum = pgEnum("transaction_type", [
  "income",
  "expense",
]);

export const incomeCategoryEnum = pgEnum("income_category", [
  "salary",
  "gift_received",
  "interest",
  "rental_income",
  "freelance",
  "business",
  "investment_returns",
  "bonus",
  "refunds",
  "side_hustle",
  "dividends",
]);

export const expenseCategoryEnum = pgEnum("expense_category", [
  "food_and_dining",
  "transport",
  "shopping",
  "bills_and_utilities",
  "health",
  "education",
  "entertainment",
  "rent",
  "groceries",
  "travel",
  "personal_care",
  "insurance",
  "emi",
  "subscription",
  "gift_given",
  "charity",
  "pets",
  "home_maintenance",
]);

export const recurringIntervalEnum = pgEnum("recurring_interval", [
  "daily",
  "weekly",
  "monthly",
  "quarterly",
  "half_yearly",
  "yearly",
]);

export const transactions = pgTable("transaction", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  accountId: text("account_id")
    .notNull()
    .references(() => accounts.id, { onDelete: "cascade" }),
  type: transactionTypeEnum("type").notNull(),
  amount: numeric("amount", { precision: 20, scale: 2 }).notNull(),

  // Predefined category — one of these will be filled based on transaction type, other will be null
  incomeCategory: incomeCategoryEnum("income_category"),
  expenseCategory: expenseCategoryEnum("expense_category"),

  // Custom user-defined category — filled only if user creates a custom category, otherwise null
  userCategoryId: text("user_category_id")
    .notNull()
    .references(() => userCategories.id, { onDelete: "set null" }),

  description: text("description").notNull(),
  date: date("date").notNull(),
  isRecurring: boolean("is_recurring").default(false).notNull(),
  recurringInterval: recurringIntervalEnum("recurring_interval"),
  nextRecurringDate: date("next_recurring_date"),
  lastProcessed: date("last+processed"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const userCategories = pgTable("user_categories", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  type: transactionTypeEnum("type").notNull(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
