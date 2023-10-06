import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" mx-10 py-3 flex flex-col md:flex-row items-center justify-between h-full">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <p>
          © 2023 - Made with 🩵 by{" "}
          <Link
            href={"https://linkedin.com/in/alexandre-dissi94460"}
            className="underline"
          >
            Alexandre Dissi
          </Link>
        </p>
      </div>
      <div className="text-center md:text-left">
        <div className="flex gap-6">
          <Link href="https://github.com/alexdissi" target="_blank">
            <FaGithub fontSize={22} />
          </Link>
          <Link
            href="https://twitter.com/alexandredissi"
            className="hover:text-twittercolor duration-300"
            target="_blank"
          >
            <FaTwitter fontSize={22} />
          </Link>
          <Link
            href="https://linkedin.com/in/alexandre-dissi94460"
            className="hover:text-linkedincolor duration-300"
            target="_blank"
          >
            <FaLinkedin fontSize={22} />
          </Link>
        </div>
      </div>
    </div>
  );
}
