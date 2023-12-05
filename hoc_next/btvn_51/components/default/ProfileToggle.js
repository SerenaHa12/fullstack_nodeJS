import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { AvatarIcon } from "@radix-ui/react-icons";
import { useSession, signIn, signOut } from "next-auth/react";

const ProfileToggle = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <div className="flex items-center px-2">
      <Button
        className="mx-2"
        onClick={() => {
          signIn();
        }}
      >
        Login
      </Button>

      <Link href="/register">Register</Link>
    </div>
  );
};

export default ProfileToggle;
