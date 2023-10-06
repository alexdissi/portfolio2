"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { RiMenu3Line, RiCloseCircleLine } from "react-icons/ri";
import { ModeToggle } from "./toggle-theme";
import Link from "next/link";
import NavMobile from "./navigation-mobile";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "A propos" },
  { href: "/project", label: "Projets" },
  { href: "/contact", label: "Contact" },
  { href: "/chat", label: "🎁" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" h-full mx-10">
      <div className="flex h-full items-center justify-between">
        <div>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            <Link href={"https://linkedin.com/in/alexandre-dissi94460"}>
              Alexandre Dissi
            </Link>
          </h2>
        </div>
        <div className="flex items-center gap-6 flex-row">
          <ModeToggle />
          <ul className="hidden md:flex md:gap-8">
            {links.map((nav) => (
              <Link href={nav.href} key={nav.label} className="relative">
                <li className="group">
                  {nav.label}
                  <span
                    className="absolute bottom-0 left-0 w-full h-0.5 
                 bg-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  ></span>
                </li>
              </Link>
            ))}
          </ul>
          <div className="md:hidden">
            <motion.button
              className="text-solidheadinglight dark:text-solidheadingdark"
              onClick={toggleMenu}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <RiMenu3Line className="text-2xl" />
            </motion.button>
          </div>
        </div>

        {isMenuOpen && <NavMobile links={links} toggleMenu={toggleMenu} />}
      </div>
    </nav>
  );
}
