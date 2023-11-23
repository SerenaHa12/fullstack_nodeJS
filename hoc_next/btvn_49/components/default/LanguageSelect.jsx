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
    <div className="max-w-[80px]">
      <Select>
        <SelectTrigger className="w-[80px]">
          <SelectValue
            placeholder={<BsGlobeAmericas size={18} />}
            className="w-[80px]"
          />
        </SelectTrigger>
        <SelectContent className="select-languge w-[80px]">
          <SelectItem value="us" className="w-[80px]">
            <div className="flex justify-between">
              <Flag country="US" size={18} className="mr-[6px]" />
            </div>
          </SelectItem>
          <SelectItem value="vn" className="w-[80px]">
            <div className="flex justify-between">
              <Flag country="VN" size={18} className="mr-[6px]" />
            </div>
          </SelectItem>
          <SelectItem value="french" className="w-[80px]">
            <div className="flex justify-between">
              <Flag country="FR" size={18} className="mr-[6px]" />
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelect;
