import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { outputFileTracing } from "@/next.config";
const NotFound = () => {
  return (
    <div className="py-12 xl:py-24 h-[84vh] xl:pt-28 container mx-auto items-center text-center">
      <div className="flex items-center">
        <Image
          src="/401.png"
          width={300}
          height={300}
          alt="404"
          className="mx-auto"
        />
      </div>
      <h1 className="text-bold text-3xl mb-4">Take a nap BROOOO</h1>
      <p className="mb-4">Error 404. This page cannot be found.</p>
      <Button variant="outline">
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
