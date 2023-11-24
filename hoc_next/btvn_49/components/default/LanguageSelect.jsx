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

const LanguageSelect = () => {
  return (
    <div className="">
      <Select>
        <SelectTrigger className="w-[80px]">
          <SelectValue placeholder={<BsGlobeAmericas size={18} />} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us" className="">
            <Flag country="US" size={18} />
          </SelectItem>
          <SelectItem value="vn" className="">
            <Flag country="VN" size={18} />
          </SelectItem>
          <SelectItem value="french" className="">
            <Flag country="FR" size={18} />
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelect;
