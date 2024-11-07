import Image from "next/image";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import Link from "next/link";
import mainLogo from "@/public/images/logo-white-sm.png";
import auth from "@/auth";

const NavMenu: React.FC = async () => {
  const session = await auth();
  return (
    <nav className='bg-transparent fixed w-full z-50'>
      <div className='flex justify-between items-center h-20 w-full px-6 lg:px-16 bg-opacity-70 backdrop-blur-md text-[#d1d7d7] shadow-md'>
        <Link href='/' className='flex items-center'>
          <Image src={mainLogo} alt='mainlogo' width={300} height={300} className="w-full h-full" />
        </Link>
        <ul className='hidden md:flex items-center gap-8'>
          <NavLinks session={session} />
        </ul>
        <MobileNav session={session} />
      </div>
    </nav>
  );
};

export default NavMenu;
