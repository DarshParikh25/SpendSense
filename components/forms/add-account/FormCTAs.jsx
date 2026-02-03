import { Button } from "@/components/ui/button";

const FormCTAs = ({ isSubmitting }) => {
  return (
    <div className={"grid grid-cols-1 md:grid-cols-2 w-full gap-4 mt-6"}>
      <Button
        type="button"
        disabled={isSubmitting}
        className={
          "border-[1.5px] border-[#1e1e24] cursor-pointer bg-transparent hover:bg-[#c3c3c3] font-semibold"
        }
      >
        Cancel
      </Button>
      <Button
        type="submit"
        disabled={isSubmitting}
        className={
          "border-none bg-[#1e1e24] text-[#bebec0] font-semibold cursor-pointer hover:bg-[#27272e]"
        }
      >
        {isSubmitting ? "Creating..." : "Create Account"}
      </Button>
    </div>
  );
};

export default FormCTAs;
