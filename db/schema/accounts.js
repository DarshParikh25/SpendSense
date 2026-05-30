import {
  boolean,
  numeric,
  pgEnum,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const accountTypeEnum = pgEnum("account_type", [
  "bank",
  "cash",
  "credit_card",
  "crypto",
  "investments",
  "savings",
]);

export const bankCategoryEnum = pgEnum("bank_category", [
  "current_account",
  "savings_account",
  "fixed_deposit",
  "recurring_deposit",
]);

export const cashCategoryEnum = pgEnum("cash_category", [
  "petty_cash",
  "wallet",
  "safe_locker",
]);

export const creditCardCategoryEnum = pgEnum("credit_card_category", [
  "visa",
  "amex",
  "mastercard",
  "rupay",
]);

export const cryptoCategoryEnum = pgEnum("crypto_category", [
  "bitcoin",
  "ethereum",
  "altcoins",
  "stablecoins",
  "multi_coins",
]);

export const investmentCategoryEnum = pgEnum("investment_category", [
  "stocks",
  "ppf",
  "mutual_funds",
  "etf",
  "bonds",
]);

export const savingsCategoryEnum = pgEnum("savings_category", [
  "general_savings",
]);

export const accounts = pgTable("accounts", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  type: accountTypeEnum("type").notNull(),

  // Only the relevant category will be filled and others will be null
  bankCategory: bankCategoryEnum("bank_category"),
  cashCategory: cashCategoryEnum("cash_category"),
  creditCardCategory: creditCardCategoryEnum("credit_card_category"),
  cryptoCategory: cryptoCategoryEnum("crypto_category"),
  investmentCategory: investmentCategoryEnum("investment_category"),
  savingsCategory: savingsCategoryEnum("savings_category"),

  balance: numeric("balance", { precision: 20, scale: 2 })
    .notNull()
    .default("0"),
  isDefault: boolean("is_default").default(false).notNull(),
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  lastUsedAt: timestamp("last_used_at"),
});
