import z from "zod";

export const transactionSchema = z
  .object({
    type: z.enum(["Expense", "Income"]),
    amount: z.coerce
      .number({ invalid_type_error: "Amount must be a number" })
      .gt(0, "Amount must be greater than 0"),
    accountId: z.string().min(1, "Please select an account"),
    category: z.string().min(1, "Please select a category"),
    date: z.date({ required_error: "Date is required" }),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters long"),
    isRecurring: z.boolean(),
    recurringInterval: z
      .enum(["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"])
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (data.isRecurring && !data.recurringInterval) {
      ctx.addIssue({
        code: "custom",
        path: ["recurringInterval"],
        message: "Please select a recurring interval",
      });
    }
  });
