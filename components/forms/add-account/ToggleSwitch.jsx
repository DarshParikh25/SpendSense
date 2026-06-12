import TooltipWrapper from "@/components/TooltipWrapper";
import { Switch } from "@/components/ui/switch";

import { Controller } from "react-hook-form";

const ToggleSwitch = ({
  name,
  control,
  isDisabled,
  heading,
  content,
  cardClassName,
  contentClassName,
  isFirstAccount = false,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const switchElement = (
          <Switch
            checked={isFirstAccount ? true : (field.value ?? false)}
            onCheckedChange={field.onChange}
            disabled={isDisabled ?? false}
            className={
              "h-6 w-12 data-[state=checked]:[&>span]:translate-x-7 data-[state=unchecked]:[&>span]:translate-x-1 data-[state=checked]:bg-[#fb5756] data-[state=unchecked]:bg-white data-[state=checked]:[&>span]:bg-white data-[state=unchecked]:[&>span]:bg-[#bebec0] cursor-pointer"
            }
          />
        );

        return (
          <div
            className={`flex items-center justify-between border-[1.5px] w-full px-2 md:px-4 py-2 md:py-3 gap-2 rounded-lg ${cardClassName}`}
          >
            <div className="flex flex-col justify-center item-baseline gap-1">
              <h4 className="text-base md:text-lg font-semibold">{heading}</h4>
              <p
                className={`text-sm leading-4 tracking-tight md:tracking-normal ${contentClassName}`}
              >
                {content}
              </p>
            </div>
            {isFirstAccount ? (
              <TooltipWrapper
                contentClassName={"bg-[#bebec0] text-[#1e1e24]"}
                content={
                  <p>Can not disable since it this is your first account.</p>
                }
              >
                <span className="inline-flex">{switchElement}</span>
              </TooltipWrapper>
            ) : (
              switchElement
            )}
          </div>
        );
      }}
    />
  );
};

export default ToggleSwitch;
