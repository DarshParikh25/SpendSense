"use client";

import { useRouter } from "next/navigation";
import { AlertTriangle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";

import { db } from "@/data/db";
import { transactionSchema } from "@/lib/validators/transactionSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../InputField";
import TypeSelect from "../TypeSelect";
import { currencyFormatter } from "@/lib/formatter";
import { transactionCategories } from "@/data/categories";
import DateSelector from "../DateSelector";
import ToggleSwitch from "../add-account/ToggleSwitch";
import FormCTAs from "../FormCTAs";

const TYPES = ["Expense", "Income"];

const RECURRING_INTERVALS = [
  "Daily",
  "Weekly",
  "Monthly",
  "Quarterly",
  "Yearly",
];

const AddTransactionForm = () => {
  const router = useRouter();

  const [showDialog, setShowDialog] = useState(false);

  const ACCOUNTS = useMemo(() => {
    return db.map((item) => ({
      value: String(item.account.id),
      label: `${item.account.name} (${currencyFormatter.format(item.account.balance)})`,
    }));
  }, []);

  const defaultAccount = db.find((item) => item.account.isDefault);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      type: "Expense",
      amount: "",
      accountId: "",
      category: "",
      date: null,
      description: "",
      isRecurring: false,
      recurringInterval: undefined,
    },
  });

  useEffect(() => {
    if (!defaultAccount) return;

    reset({
      type: "Expense",
      amount: "",
      accountId: String(defaultAccount?.account.id),
      category: "",
      date: new Date(),
      description: "",
      isRecurring: false,
      recurringInterval: undefined,
    });
  }, [defaultAccount, reset]);

  // Watch
  const type = useWatch({
    control,
    name: "type",
  });

  const isRecurring = useWatch({
    control,
    name: "isRecurring",
  });

  const selectedCategory = useWatch({
    control,
    name: "category",
  });

  useEffect(() => {
    if (selectedCategory === "__add_new__") {
      console.log(selectedCategory); // replace with add new category logic
    }
  }, [selectedCategory]);

  const categories = useMemo(() => {
    return [
      ...transactionCategories
        .filter((cat) => cat.type === type)
        .map((cat) => ({
          value: cat.name,
          label: cat.name,
        })),
      {
        value: "__add_new__",
        label: `+ Add new ${type.toLowerCase()} category`,
      }, // later will add the dialog box for the addition of new category
    ];
  }, [type]);

  const onSubmit = (data) => {
    console.log(data); // replace it with actual on submit logic
    reset();
    router.back();
  };

  const handleCancel = () => {
    setShowDialog(false);
  };

  const handleConfirm = () => {
    setShowDialog(false);
    router.back();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col justify-center items-baseline gap-4"
    >
      {/* Transaction Type */}
      <div className="w-full flex flex-col gap-2">
        <label className="font-semibold">Account Type</label>
        <TypeSelect
          name={"type"}
          control={control}
          types={TYPES}
          label="Transaction Type"
          triggerClassName={"focus-visible:ring-0"}
          contentClassName={"bg-[#1e1e24]"}
          itemClassName={"bg-transparent hover:bg-[#27272e]"}
        />
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Amount */}
        <InputField
          control={control}
          name={"amount"}
          label={"Amount"}
          register={register}
          placeholder="0.00"
          errors={errors}
          required
          className={"w-full"}
        />

        {/* Account */}
        <div className="w-full flex flex-col gap-2">
          <label className="font-semibold">Account</label>
          <TypeSelect
            name={"accountId"}
            control={control}
            types={ACCOUNTS}
            label="Accounts"
            required
            triggerClassName={"focus-visible:ring-0"}
            contentClassName={"bg-[#1e1e24]"}
            itemClassName={"bg-transparent hover:bg-[#27272e]"}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="w-full flex flex-col gap-2">
        <label className="font-semibold">
          Category <span className="text-[#fb5756]">*</span>
        </label>
        <TypeSelect
          name={"category"}
          control={control}
          types={categories}
          label={`${type} Categories`}
          placeholder={"Select Category"}
          required
          triggerClassName={"focus-visible:ring-0"}
          contentClassName={"bg-[#1e1e24]"}
          itemClassName={"bg-transparent hover:bg-[#27272e]"}
        />
      </div>

      {/* Transaction Date */}
      <div className="w-full flex flex-col gap-2">
        <label className="font-semibold">Date</label>
        <DateSelector
          name={"date"}
          control={control}
          contentClassName="bg-[#1e1e24]"
        />
      </div>

      {/* Description */}
      <InputField
        control={control}
        name={"description"}
        label={"Description"}
        register={register}
        placeholder="Enter Description"
        errors={errors}
        required
        className={"w-full"}
      />

      {/* Set Recurring Transaction */}
      <ToggleSwitch
        name={"isRecurring"}
        control={control}
        heading={"Recurring Transaction"}
        content={"Set up a recurring schedule for this transaction"}
        contentClassName={"text-[#bebec0]/60"}
      />

      {
        // Recurring Interval
        isRecurring && (
          <div className="w-full flex flex-col gap-2">
            <label className="font-semibold">
              Recurring Interval <span className="text-[#fb5756]">*</span>
            </label>
            <TypeSelect
              name={"recurringInterval"}
              control={control}
              types={RECURRING_INTERVALS}
              label={`Intervals`}
              placeholder={"Select Recurring Interval"}
              required
              triggerClassName={"focus-visible:ring-0"}
              contentClassName={"bg-[#1e1e24]"}
              itemClassName={"bg-transparent hover:bg-[#27272e]"}
            />
          </div>
        )
      }

      {/* Form CTAs */}
      <FormCTAs
        isSubmitting={isSubmitting}
        submitText={"Create Account"}
        loadingText={"Creating..."}
        inSheet={false}
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
        Icon={AlertTriangle}
        title={"Are you sure you want to navigate away from this page?"}
        desc={
          "You will lose all changes made. Press Proceed to continue to the previous page, or Cancel to stay on the current page."
        }
        actionText="Proceed"
        cancelBtnClassName="hover:bg-[#27272e]"
        submitBtnClassName="bg-[#fb5756] text-white hover:bg-[#ff6f6f]"
      />
    </form>
  );
};

export default AddTransactionForm;
