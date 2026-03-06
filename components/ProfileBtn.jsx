"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const ProfileBtn = ({ className, showGreet = false }) => {
  const { user } = useUser();

  return (
    <>
      {showGreet ? (
        <p className={`font-semibold ${className}`}>
          Hey, {user?.firstName ?? "User"}!
        </p>
      ) : undefined}
      <UserButton
        appearance={{
          theme: dark,
          elements: {
            avatarBox: "w-9! h-9!",
            userButtonPopoverActionButton__signOut: {
              color: "#FB5756",
              "&:hover": {
                color: "#FB5756",
                backgroundColor: "rgba(251, 87, 86, 0.1)",
                transition: "background-color 0.2s ease-in-out",
              },
            },
            userProfileSidebarItem__active: {
              backgroundColor: "#FB5756",
              color: "#FFFFFF",
            },
          },
        }}
      />
    </>
  );
};

export default ProfileBtn;
