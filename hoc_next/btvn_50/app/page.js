import Banner from "@/components/home/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-12 xl:py-24 w-full h-[84vh] relative overflow-hidden">
      <video
        className="w-full h-full object-cover absolute top-0"
        src="/video.mp4"
        autoPlay
        loop
        muted
      />
      <Banner />
    </div>

  );
}
