// /app/actions/accountActions.js

"use server";

import { accounts } from "@/db/schema";
import { db } from "@/lib/db";
import { accountSchema } from "@/lib/validators/accountSchema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export const createAccount = async (formData) => {
  try {
    console.log("Create Account Server Action called successfully!");

    const { userId } = await auth();

    if (!userId) {
      return {
        success: false,
        error: "Please sign in to continue,",
      };
    }

    // Server-side validation
    const validatedData = accountSchema.safeParse(formData);

    if (!validatedData.success) {
      return {
        success: false,
        error:
          validatedData.error.issues[0]?.message || "Invalid account data.",
      };
    }

    const data = validatedData.data;

    console.log("Validated data: ", data);

    const type = data.type.toLowerCase();

    const accountValues = {
      userId,
      name: data.name,
      type,
      balance: String(data.balance),
      isDefault: data.isDefault ?? false,
    };

    // Category mapping
    if (type === "bank") accountValues.bankCategory = data.category;

    if (type === "cash") accountValues.cashCategory = data.category;

    if (type === "credit card")
      // later change it to "credit_card"
      accountValues.creditCardCategory = data.category;

    const hasExistingAccount = await db.query.accounts.findFirst({
      where: eq(accounts.userId, userId),
    });

    const isFirstAccount = !hasExistingAccount;

    // First account must always be default
    // OR user explicitly selected "Set as Default"
    if (isFirstAccount || data.isDefault) {
      await db
        .update(accounts)
        .set({
          isDefault: false,
        })
        .where(eq(accounts.userId, userId));

      accountValues.isDefault = true;
    }

    await db.insert(accounts).values(accountValues);

    return {
      success: true,
      message: "Account created successfully.",
    };
  } catch (error) {
    console.log("Create account error: ", error);

    return {
      success: false,
      error: "Something went wrong while creating the account.",
    };
  }
};
