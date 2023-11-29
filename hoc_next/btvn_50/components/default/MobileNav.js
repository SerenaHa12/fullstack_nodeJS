import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Logo from "./Logo";
// import Social from "../home/Social";

const MobileNav = () => {
  // <Social
  //           containerStyles="flex gap-x-4"
  //           iconsStyles="items-center"
  //         />
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer"></AlignJustify>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-xl text-extrabold"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav