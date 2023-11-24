"use client";

import React from "react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import DevImg from "../default/DevImg";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  Image,
} from "lucide-react";
import { BsFillRocketFill } from "react-icons/bs";
import { useTranslations } from "next-intl";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { array } from "zod";

const AboutSection = () => {
  const t = useTranslations("about")
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
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <div className="about-content">
          <h2 className="section-title mb-8 xl:mb16 text-center mx-auto">
            {t("section-name")}
          </h2>
        </div>

        <div className="section-intro flex flex-col xl:flex-row">
          {/**image */}
          <div className="hidden xl:flex flex-1 relative">
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute top-1 left-1"></div>
            <DevImg
              containerStyles=" w-[295px] h-[376px] bg-no-repeat relative bg-bottom top-2 left- ml-[60px] mt-[20px]"
              imgSource="/hero/developer.png"
              style={{ inset: "20px 40px" }}
            />
          </div>

          {/**tab */}
          <div className="flex-1">
            <Tabs defaultValue="info">
              <TabsList className="grid w-100 grid-cols-3">
                <TabsTrigger
                  value="info"
                  className="py-2 px-4 text-center cursor-pointer border-b-2 border-transparent hover:border-yellow-600 dark:hover:border-violet-800 focus:outline-none"
                >
                  Persional Info
                </TabsTrigger>
                <TabsTrigger
                  value="qu"
                  className="py-2 px-4 text-center cursor-pointer border-b-2 border-transparent hover:border-yellow-600 dark:hover:border-violet-800 focus:outline-none"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger
                  value="skill"
                  className="py-2 px-4 text-center cursor-pointer border-b-2 border-transparent hover:border-yellow-600 dark:hover:border-violet-800 focus:outline-none"
                >
                  Skills
                </TabsTrigger>
              </TabsList>

              {/**tab content */}
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="info">My info</TabsContent>
                <TabsContent value="qu">My qualification</TabsContent>
                <TabsContent value="skill">My skill</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
