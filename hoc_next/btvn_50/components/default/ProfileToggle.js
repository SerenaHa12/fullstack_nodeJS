import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { AvatarIcon } from "@radix-ui/react-icons";

const ProfileToggle = () => {
  return (
    <div className="flex items-center px-2">
      <Link href="/sign-in" className={buttonVariants}>
        <AvatarIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
      </Link>
    </div>
  );
};

export default ProfileToggle;
