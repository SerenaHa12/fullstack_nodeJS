"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect } from "react";
const Navigation = () => {
  //Lấy pathname
  const pathname = usePathname();
  useEffect(() => {
    console.log("Hello F8");
  }, []);
  return (
    <div>
      <ul className="menu">
        <li className={clsx(pathname === "/" && "active")}>
          <Link href="/">Trang chủ</Link>
        </li>
        <li className={clsx(pathname === "/san-pham" && "active")}>
          <Link href="/san-pham">Sản phẩm</Link>
        </li>
        <li className={clsx(pathname === "/tin-tuc" && "active")}>
          <Link href="/tin-tuc">Tin tức</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
