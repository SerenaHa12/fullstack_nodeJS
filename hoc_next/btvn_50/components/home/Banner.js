import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 container mx-auto items-center text-center relative bg-transparent">

      <div className="container mx-auto my-auto bg-transparent">
        <h1 className="text-6xl font-bold mt-[100px] mb-4">
          EVERY TRIP IS WORTH IT
        </h1>
        <div className="content mb-4 leading-8">
          <p>Explore New Lands With Us</p>
          <p>Những Chuyến Đi Đang Chờ Đợi Bạn</p>
        </div>
        <Button className="my-2">
          <Link href="/package">Explore Now</Link>
        </Button>
      </div>
    </section>
  );
};

export default Banner;
