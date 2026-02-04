"use client";

import { useForm } from "react-hook-form";

import AccountTypeSelect from "./AccountTypeSelect";
import FormCTAs from "./FormCTAs";
import InputField from "./Input";
import DefaultToggle from "./DefaultToggle";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSchema } from "@/lib/validators/accountSchema";

const accountTypes = ["Savings", "Current"];

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
      type: "Savings",
      balance: 0,
      isDefault: false,
    },
  });

  const onSubmit = (data) => {
    setIsSubmitting(true);
    console.log(data);
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
        name={"name"}
        label={"Account Name"}
        errors={errors}
        required
        register={register}
        placeholder="e.g., Personal"
      />

      {/* Account Type */}
      <div className="w-full flex flex-col gap-2">
        <label className="font-semibold">Account Type</label>
        <AccountTypeSelect control={control} accountTypes={accountTypes} />
        {errors.type && (
          <p className="text-[#fb5756] text-sm">{errors.type.message}</p>
        )}
      </div>

      {/* Initial Balance */}
      <InputField
        name={"balance"}
        label={"Initial Balance"}
        register={register}
        errors={errors}
        placeholder="0.0"
        validation={{
          valueAsNumber: true,
        }}
        required
      />

      {/* Set Account as default */}
      <DefaultToggle control={control} />

      {/* Form CTAs */}
      <FormCTAs isSubmitting={isSubmitting} />
    </form>
  );
};

export default AddAccountForm;
