"use client";
import React from "react";

import DevImg from "../default/DevImg";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

import { BsFillRocketFill } from "react-icons/bs";

const infoData = [
  { icon: <User2 size={20} />, text: "Do Ha Chi" },
  { icon: <MailIcon size={20} />, text: "dohachi.dev@gmail.com" },
  { icon: <HomeIcon size={20} />, text: "Cau Giay, Ha Noi" },
  { icon: <PhoneCall size={20} />, text: "0373506620" },
  { icon: <GraduationCap size={20} />, text: "Bachalor on ICT" },
  { icon: <Calendar size={20} />, text: "12/12/2002" },
];

const qualificationData = [
  {
    title: "Education",
    data: [
      {
        university: "HUS",
        qualification: "ICT",
        year: "2017-2020",
      },
      {
        university: "USTH",
        qualification: "Bachalor of ICT",
        year: "2020-2023",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        company: "National Cyber Security",
        qualification: "Business Analyst",
        year: "2022-2023",
      },
      {
        company: "BIDV",
        qualification: "Business Analyst",
        year: "current",
      },
    ],
  },
];
const skillData = [
  { title: "skills", data: [{ name: "HTML, CSS" }, { name: "HTML, CSS" }] },
  {
    title: "tools",
    data: [
      { img: "/about/vscode.svg" },
      { img: "/about/figma.svg" },
      { img: "/about/notion.svg" },
      { img: "/about/wordpress.svg" },
    ],
  },
];

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { array } from "zod";

const AboutSection = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return <div>About</div>;
};

export default AboutSection;
