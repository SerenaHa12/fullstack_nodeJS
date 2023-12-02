import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { AvatarIcon } from "@radix-ui/react-icons";

const ProfileToggle = () => {
  return (
    <div className="flex items-center px-2">
      <Link href="/login" className="mx-2">Login</Link>
      <Link href="/register">Register</Link>
    </div>
  );
};

export default ProfileToggle;
