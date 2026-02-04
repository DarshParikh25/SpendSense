import z from "zod";

export const accountSchema = z.object({
  name: z.string().min(4, "Account name must be at least 4 character"),
  type: z.enum(["Savings", "Current"]),
  balance: z
    .number({ invalid_type_error: "balance must be a number" })
    .positive("Balance must be greater than 0"),
  isDefault: z.boolean().optional(),
});
