import Image from "next/image";
import CreateAccountForm from "./_components/CreateAccountForm";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

const CreateAccountPage = async () => {
  const user = await currentUser();

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
            Welcome Onboard, {user.firstName}!
          </h2>
          <p>Create an account to proceed.</p>
        </div>
      </div>
      <CreateAccountForm />
    </div>
  );
};

export default CreateAccountPage;
