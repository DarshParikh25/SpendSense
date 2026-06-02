"use client";

import ToggleSwitch from "@/components/forms/add-account/ToggleSwitch";
import FormCTAs from "@/components/forms/FormCTAs";
import InputField from "@/components/forms/InputField";
import TypeSelect from "@/components/forms/TypeSelect";

import { accountTypes } from "@/config/categoryConfig";
import { accountCategories } from "@/data/categories";
import { accountSchema } from "@/lib/validators/accountSchema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";

const ACCOUNT_TYPES = accountCategories.map((cat) => cat.name);

const CreateAccountForm = () => {
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
    console.log(data); // replace it with actual on submit logic
    // logic here
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border rounded-lg w-fit flex flex-col justify-center items-baseline px-4 py-8 gap-4"
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
        className={"border-[#bebec0]/30 focus-visible:border-[#bebec0]"}
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
          triggerClassName={"border-[#bebec0]/30"}
          contentClassName={
            "border-[1.5px] border-[#bebec0] bg-[#1e1e24] text-[#bebec0]"
          }
          itemClassName={"bg-transparent hover:bg-[#27272c]"}
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
            triggerClassName={"border-[#bebec0]/30"}
            contentClassName={
              "border-[1.5px] border-[#bebec0] bg-[#1e1e24] text-[#bebec0]"
            }
            itemClassName={"bg-transparent hover:bg-[#27272c]"}
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
        className={"border-[#bebec0]/30 focus-visible:border-[#bebec0]"}
      />

      {/* Set Account as default */}
      <ToggleSwitch
        name={"isDefault"}
        control={control}
        heading="Set as Default"
        content="This account will be selected by default for transactions"
        cardClassName={"border-[#bebec0]/30"}
        contentClassName={"text-[#bebec0]/75"}
      />

      {/* Form CTAs */}
      <FormCTAs
        isSubmitting={isSubmitting}
        submitText={"Create Account"}
        loadingText={"Creating..."}
        inSheet={false}
        cancelBtnClassName={"border-[#bebec0] hover:bg-[#27272e]"}
        submitBtnClassName={"bg-[#bebec0] text-[#1e1e24] hover:bg-[#c3c3c3]"}
      />
    </form>
  );
};

export default CreateAccountForm;
