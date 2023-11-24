"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BsGlobeAmericas } from "react-icons/bs";

import Flag from "react-flagkit";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const LanguageSelect = ({ params }) => {
  const router = useRouter();
  const pathname = usePathname();

  console.log(pathname.split("/")[1]);

  return (
    <div className="">
      <Select
        defaultValue={pathname.split("/")[1]}
        onValueChange={(value) => {
          router.replace("/" + value);
        }}
      >
        <SelectTrigger className="w-[80px]">
          <SelectValue placeholder={<BsGlobeAmericas size={18} />} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">
            <Flag country="US" size={18} />
          </SelectItem>
          <SelectItem value="vn">
            <Flag country="VN" size={18} />
          </SelectItem>
          <SelectItem value="fr">
            <Flag country="FR" size={18} />
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelect;
