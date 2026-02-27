"use client";

import { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";

import TypeSelect from "../TypeSelect";
import FormCTAs from "../FormCTAs";
import InputField from "../InputField";
import ToggleSwitch from "./ToggleSwitch";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSchema } from "@/lib/validators/accountSchema";
import { accountCategories } from "@/data/categories";
import { accountTypes } from "@/config/categoryConfig";

const ACCOUNT_TYPES = accountCategories.map((cat) => cat.name);

const AddAccountForm = ({ closeDrawer, setIsSubmitting }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      name: "",
      type: "",
      category: "",
      balance: "",
      isDefault: false,
    },
  });

  const type = useWatch({
    control,
    name: "type",
  });

  const ACCOUNT_CATEGORIES = useMemo(() => accountTypes[type], [type]);

  const onSubmit = (data) => {
    setIsSubmitting(true);
    console.log(data); // replace it with actual on submit logic
    // logic here
    reset();
    closeDrawer();
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col justify-center items-baseline px-4 gap-4"
    >
      {/* Account Name */}
      <InputField
        control={control}
        name={"name"}
        label={"Account Name"}
        errors={errors}
        required
        register={register}
        placeholder="e.g., Personal"
        className={"border-[#1e1e24]/30 focus-visible:border-[#1e1e24]"}
      />

      {/* Account Type */}
      <div className="w-full flex flex-col gap-2">
        <label className="font-semibold">
          Account Type <span className="text-[#fb5756]">*</span>
        </label>
        <TypeSelect
          name={"type"}
          control={control}
          types={ACCOUNT_TYPES}
          placeholder={"Select account type"}
          label="Account Types"
          required
          triggerClassName={"border-[#1e1e24]/30"}
          contentClassName={
            "border-[1.5px] border-[#1e1e24] bg-[#bebec0] text-[#1e1e24]"
          }
          itemClassName={"bg-transparent hover:bg-[#c3c3c3]"}
        />
      </div>

      {/* Account Sub Category */}
      {ACCOUNT_TYPES.includes(type) && (
        <div className="w-full flex flex-col gap-2">
          <label className="font-semibold">
            Account Category <span className="text-[#fb5756]">*</span>
          </label>
          <TypeSelect
            name={"category"}
            control={control}
            types={ACCOUNT_CATEGORIES}
            placeholder={`Select ${type.toLowerCase()} category`}
            label="Account Categories"
            required
            triggerClassName={"border-[#1e1e24]/30"}
            contentClassName={
              "border-[1.5px] border-[#1e1e24] bg-[#bebec0] text-[#1e1e24]"
            }
            itemClassName={"bg-transparent hover:bg-[#c3c3c3]"}
          />
        </div>
      )}

      {/* Initial Balance */}
      <InputField
        control={control}
        name={"balance"}
        label={"Initial Balance"}
        register={register}
        errors={errors}
        placeholder="0.0"
        required
        className={"border-[#1e1e24]/30 focus-visible:border-[#1e1e24]"}
      />

      {/* Set Account as default */}
      <ToggleSwitch
        name={"isDefault"}
        control={control}
        heading="Set as Default"
        content="This account will be selected by default for transactions"
        cardClassName={"border-[#1e1e24]/30"}
        contentClassName={"text-[#1e1e24]/75"}
      />

      {/* Form CTAs */}
      <FormCTAs
        isSubmitting={isSubmitting}
        submitText={"Create Account"}
        loadingText={"Creating..."}
        inSheet={true}
        cancelBtnClassName={"border-[#1e1e24] hover:bg-[#c3c3c3]"}
        submitBtnClassName={"bg-[#1e1e24] text-[#bebec0] hover:bg-[#27272e]"}
      />
    </form>
  );
};

export default AddAccountForm;
