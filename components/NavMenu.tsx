"use client";
import Image from "next/image";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import mainLogo from "@/public/images/logo-white-sm.png";
import { Session } from "next-auth";

interface NavMenuProps {
  session: Session | null; // replace `any` with the correct session type
}

const NavMenu: React.FC<NavMenuProps> = ({ session }) => {
  const pathname = usePathname();
  const customBgPaths = [
    "/startup-portfolio/manual-valuation",
    "/startup-portfolio/ai-valuation",
    "/portfolio/analytics",
    "/portfolio/following",
    "/portfolio/investments",
  ];
  const isCustomBg = customBgPaths.includes(pathname);

  return (
    <nav
      className={`fixed w-full z-50 ${
        isCustomBg
          ? "bg-gradient-to-r from-[#87bab3] to-[#4d7374]"
          : "bg-transparent"
      }`}>
      <div className='flex justify-between items-center h-20 w-full pr-6 lg:pr-16 lg:pl-4 bg-opacity-70 backdrop-blur-md text-[#d1d7d7] shadow-md'>
        <Link href='/' className='flex items-center'>
          <Image
            src={mainLogo}
            alt='mainlogo'
            width={300}
            height={300}
            className='w-full h-full'
          />
        </Link>
        <ul className='hidden lg:flex items-center gap-8'>
          <NavLinks session={session} />
        </ul>
        <MobileNav session={session} />
      </div>
    </nav>
  );
};

export default NavMenu;
