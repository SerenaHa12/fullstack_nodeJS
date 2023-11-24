"use client";
import Link from "next/link";

import { Button } from "../ui/button";
import { Download, Send } from "lucide-react";
import {
  DownloadIcon,
  ExternalLinkIcon,
  TriangleDownIcon,
  StarIcon,
} from "@chakra-ui/icons";

import DevImg from "../default/DevImg";
import Social from "./Social";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col mx-auto xl:mx-0 justify-center text-center xl:text-left">
            {/** left side hero */}
            <div className="hero-content">
              <h1 className="h1 text-zinc-700 dark:text-zinc-50">Do Ha Chi</h1>
              <h3 className="text-orange-800 font-semibold mb-4">
                Web Developer
              </h3>
              <div className="title">
                <p className="text-sm mb-2 text-zinc-600  dark:text-gray-400 max-w-[490px] mx-auto xl:mx-0">
                  Hi. Im DO Ha Chi. A passionate Fullstack Developer - UI/UX
                  Designer based in Hanoi, Vietnam. I have 2 years experience
                  Developer Bussiness.
                </p>
                <p className="text-sm dark:text-neutral-50 text-bold mb-4">
                  Im a photographer and crochet lover.
                </p>
              </div>
            </div>
            <div className="hero-buttons flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  <ExternalLinkIcon size={18} />
                  Contact
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                <DownloadIcon size={18} />
                Download CV
              </Button>
            </div>

            <div className="hero-social">
              <Social
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconsStyles="text-foreground text-[16px] hover:text-primary transition-all"
              />
            </div>
          </div>

          {/** right side hero */}
          <div className="hidden xl:flex relative">
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles=" w-[295px] h-[376px] bg-no-repeat relative bg-bottom mr-[110px]"
              imgSource="/hero/developer.png"
            />
          </div>
        </div>

        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 items-center animate-bounce">
          <TriangleDownIcon className="text-xl text-primary cursor-pointer" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
