// 404.js
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href="/">Go back home</Link>
    </>
  );
}
