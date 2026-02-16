"use client";

import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const ProfileBtn = () => {
  return (
    <UserButton
      appearance={{
        theme: dark,
        elements: {
          avatarBox: "w-9! h-9!",
          userButtonPopoverActionButton__signOut: {
            color: "#FB5756",
          },
          userProfileSidebarItem__active: {
            backgroundColor: "#FB5756",
            color: "#FFFFFF",
          },
        },
      }}
    />
  );
};

export default ProfileBtn;
