import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const t = useTranslations("navbar");
  console.log(t);
  console.log(t("home"));

  const links = [
    { path: "/", name: "home" },
    // { path: "/about", name: "about" },
    // { path: "/product", name: "product" },
    // { path: "/contact", name: "contact" },
  ];

  const pathname = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        console.log(link.name);
        const translatedName = t(link.name);

        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize: ${linkStyles}`}
          >
            {link.path === pathname && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              ></motion.span>
            )}
            {translatedName}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
