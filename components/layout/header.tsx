import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

const Header = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src={"/hilink-logo.svg"} alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button>
          <Image src="/user.svg" alt="icon" width={24} height={24} />
          Sign Up
        </Button>
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Header;
