import z from "zod";

export const accountSchema = z
  .object({
    name: z.string().min(4, "Account name must be at least 4 character"),
    type: z.enum(["bank", "cash", "credit card"], {
      required_error: "Please select an account type",
    }),
    category: z.string().optional(),
    balance: z.coerce
      .number({ invalid_type_error: "Balance must be a number" })
      .gte(0, "Balance must be greater than or equals to 0"),
    isDefault: z.boolean().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.type && !data.category) {
      ctx.addIssue({
        code: "custom",
        path: ["category"],
        min: 1,
        message: "Please select an account category",
      });
    }
  });
