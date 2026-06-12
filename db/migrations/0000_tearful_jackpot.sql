CREATE TYPE "public"."account_type" AS ENUM('bank', 'cash', 'credit_card');--> statement-breakpoint
CREATE TYPE "public"."bank_category" AS ENUM('current_account', 'savings_account');--> statement-breakpoint
CREATE TYPE "public"."cash_category" AS ENUM('petty_cash', 'wallet');--> statement-breakpoint
CREATE TYPE "public"."credit_card_category" AS ENUM('visa', 'amex', 'mastercard', 'rupay');--> statement-breakpoint
CREATE TYPE "public"."expense_category" AS ENUM('food_and_dining', 'transport', 'shopping', 'bills_and_utilities', 'health', 'education', 'entertainment', 'rent', 'groceries', 'travel', 'personal_care', 'insurance', 'emi', 'subscription', 'gift_given', 'charity', 'pets', 'home_maintenance');--> statement-breakpoint
CREATE TYPE "public"."income_category" AS ENUM('salary', 'gift_received', 'interest', 'rental_income', 'freelance', 'business', 'investment_returns', 'bonus', 'refunds', 'side_hustle', 'dividends');--> statement-breakpoint
CREATE TYPE "public"."recurring_interval" AS ENUM('daily', 'weekly', 'monthly', 'quarterly', 'half_yearly', 'yearly');--> statement-breakpoint
CREATE TYPE "public"."transaction_type" AS ENUM('income', 'expense');--> statement-breakpoint
CREATE TABLE "users" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"first_name" text,
	"last_name" text,
	"image_url" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "accounts" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"name" text NOT NULL,
	"type" "account_type" NOT NULL,
	"bank_category" "bank_category",
	"cash_category" "cash_category",
	"credit_card_category" "credit_card_category",
	"balance" numeric(20, 2) DEFAULT '0' NOT NULL,
	"is_default" boolean DEFAULT false NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"last_used_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "transactions" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"account_id" text NOT NULL,
	"type" "transaction_type" NOT NULL,
	"amount" numeric(20, 2) NOT NULL,
	"income_category" "income_category",
	"expense_category" "expense_category",
	"user_category_id" text,
	"description" text NOT NULL,
	"date" date NOT NULL,
	"is_recurring" boolean DEFAULT false NOT NULL,
	"recurring_interval" "recurring_interval",
	"next_recurring_date" date,
	"last_processed" date,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_categories" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"type" "transaction_type" NOT NULL,
	"name" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "budgets" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"account_id" text NOT NULL,
	"amount" numeric(20, 2) NOT NULL,
	"month" integer NOT NULL,
	"year" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "budgets_account_id_month_year_unique" UNIQUE("account_id","month","year")
);
--> statement-breakpoint
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_account_id_accounts_id_fk" FOREIGN KEY ("account_id") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_category_id_user_categories_id_fk" FOREIGN KEY ("user_category_id") REFERENCES "public"."user_categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_categories" ADD CONSTRAINT "user_categories_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "budgets" ADD CONSTRAINT "budgets_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "budgets" ADD CONSTRAINT "budgets_account_id_accounts_id_fk" FOREIGN KEY ("account_id") REFERENCES "public"."accounts"("id") ON DELETE cascade ON UPDATE no action;