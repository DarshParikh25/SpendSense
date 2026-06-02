import { SignIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { dark } from "@clerk/themes";
import Image from "next/image";
import { redirect } from "next/navigation";
import AuthToast from "./_components/AuthToast";

export const metadata = {
  title: "Sign In",
};

const Login = async ({ searchParams }) => {
  const { userId } = await auth();

  // If user is already signed in
  if (userId) {
    redirect("/dashboard");
  }

  const params = await searchParams;

  return (
    <div className="py-20 w-full min-h-screen flex flex-col justify-center items-center">
      <AuthToast message={params?.message} />
      <div className="text-center mb-8">
        <h1 className="mx-4 text-3xl flex flex-wrap justify-center items-center font-bold text-white mb-2">
          <span>Welcome back to&nbsp;</span>
          <Image
            src={"/logo/logo.png"}
            width={200}
            height={100}
            className="h-10 w-auto object-cover pointer-events-none sha"
            alt="logo"
            priority
          />
        </h1>
        <p className="text-[#bebec0]">Please sign in to continue!</p>
      </div>

      {/* Sign In component */}
      <SignIn
        routing="path"
        appearance={{
          theme: dark,
          elements: {
            headerTitle: "hidden",
            headerSubtitle: "hidden",
            cardBox: "shadow-2xl! border-2!",
            formButtonPrimary:
              "bg-[#bebec0]! text-[#1e1e24]! hover:bg-[#b2b2b2]!",
            footerActionLink: "text-[#fb5756]! hover:text-[#ff3434]!",
            footerActionText: "text-[#bebec0]!",
          },
        }}
      />
    </div>
  );
};

export default Login;
