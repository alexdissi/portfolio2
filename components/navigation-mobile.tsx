import { motion } from "framer-motion";
import Link from "next/link";
import { RiCloseCircleLine } from "react-icons/ri";

export default function NavMobile({
  links,
  toggleMenu,
}: {
  links: { href: string; label: string }[];
  toggleMenu: () => void;
}) {
  return (
    <motion.div
      className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
    >
      <motion.ul
        className="flex flex-col gap-14 text-center scroll-m-20 text-3xl font-semibold tracking-tight text-slate-100"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {links.map((nav) => (
          <Link href={nav.href} key={nav.label} onClick={toggleMenu}>
            {nav.label}
          </Link>
        ))}
      </motion.ul>
      <motion.button
        className="absolute top-4 right-4 text-slate-100 "
        onClick={toggleMenu}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <RiCloseCircleLine className="text-3xl" />
      </motion.button>
    </motion.div>
  );
}
