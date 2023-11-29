"use client";

import React, { useEffect } from "react";
import { useState } from "react";

import { Button } from "../ui/button";
import { Search2Icon } from "@chakra-ui/icons";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../ui/command";

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const SearchToggle = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="hover:bg-transparent">
            <Search2Icon className="h-[1.2rem] w-[1.2rem] transition-all" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 mt-2 outline-none">
          <Command className="rounded-lg border-none shadow-md">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <FaceIcon className="mr-2 h-4 w-4" />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                  <RocketIcon className="mr-2 h-4 w-4" />
                  <span>Launch</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SearchToggle;
