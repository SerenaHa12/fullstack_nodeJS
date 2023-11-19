import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Navigation = () => {
  // lấy pathname
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div>
      <Ul className="menu">
        <li className={clsx(pathname === "/" && "active")}>
          <Link href="/">Trang chủ</Link>
        </li>
      </Ul>
    </div>
  );
};

export default Navigation;
