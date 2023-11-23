import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo-icon.svg" width={33.55} height={42} priority alt="logo" />
    </Link>
  );
};

export default Logo;
