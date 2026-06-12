"use client";

import { createAccount } from "@/app/actions/accountActions";
import ToggleSwitch from "@/components/forms/add-account/ToggleSwitch";
import FormCTAs from "@/components/forms/FormCTAs";
import InputField from "@/components/forms/InputField";
import TypeSelect from "@/components/forms/TypeSelect";

import { accountTypes } from "@/config/categoryConfig";
import { ACCOUNT_CATEGORIES, accountCategories } from "@/data/categories";
import { accountSchema } from "@/lib/validators/accountSchema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";

const ACCOUNT_TYPES = accountCategories.map((cat) => ({
  label: cat.name,
  value: cat.name.toLowerCase(),
}));

console.log(ACCOUNT_TYPES);

const CreateAccountForm = ({ hasAccounts }) => {
  const router = useRouter();

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
      isDefault: true,
    },
  });

  const type = useWatch({
    control,
    name: "type",
  });

  const CATEGORIES = useMemo(() => ACCOUNT_CATEGORIES[type], [type]);

  const onSubmit = async (data) => {
    const result = await createAccount(data);

    if (!result.success) {
      toast.error(result.error);
      return;
    }

    toast.success(result.message);

    reset();

    router.push("/dashboard");
  };

  const onLeaveConfirm = () => {
    reset();
    router.push("/");
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
      {ACCOUNT_TYPES.some((accountType) => accountType.value === type) && (
        <div className="w-full flex flex-col gap-2">
          <label className="font-semibold">
            Account Category <span className="text-[#fb5756]">*</span>
          </label>
          <TypeSelect
            name={"category"}
            control={control}
            types={CATEGORIES}
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

      {/* Account default by default since this is only for the first account creation */}
      <ToggleSwitch
        name={"isDefault"}
        control={control}
        isDisabled={true}
        isFirstAccount={!hasAccounts}
        heading="Set as Default"
        content="This account will be selected by default for transactions"
        cardClassName={"border-[#bebec0]/30"}
        contentClassName={"text-[#bebec0]/75"}
      />

      {/* Form CTAs */}
      <FormCTAs
        handleLeaveConfirm={onLeaveConfirm}
        isSubmitting={isSubmitting}
        submitText={"Create Account"}
        loadingText={"Creating..."}
        inSheet={false}
        title={"Cancel setup?"}
        desc={
          "You need at least one account to start tracking your finances. If you leave now, you'll be taken back and can complete the setup later."
        }
        cancelText={"Continue Setup"}
        actionText={"Leave Setup"}
        cancelBtnClassName={"border-[#bebec0] hover:bg-[#27272e]"}
        submitBtnClassName={"bg-[#bebec0] text-[#1e1e24] hover:bg-[#c3c3c3]"}
      />
    </form>
  );
};

export default CreateAccountForm;
