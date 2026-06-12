import Link from "next/link";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";

import CreateAccountForm from "./_components/CreateAccountForm";
import { hasAccounts } from "@/lib/helper/account/accountChecker";
import { redirect } from "next/navigation";

const CreateAccountPage = async () => {
  const { userId } = await auth();

  const hasUserAccount = await hasAccounts(userId);

  if (hasUserAccount) redirect("/dashboard");

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4 overflow-x-hidden px-4">
      <div className="text-center w-fit flex flex-col justify-center items-center gap-2">
        <Link href={"/"} aria-label="home">
          <Image
            width={220}
            height={40}
            src={"/logo/logo.png"}
            alt="SpendSense Logo"
          />
        </Link>
        <div>
          <h2 className="text-xl font-semibold text-[#fff]">
            Welcome Onboard, {"User"}! {/* Add user.firstName, afterwards */}
          </h2>
          <p>Create an account to proceed.</p>
        </div>
      </div>
      <CreateAccountForm hasAccounts={hasUserAccount} />
    </div>
  );
};

export default CreateAccountPage;
