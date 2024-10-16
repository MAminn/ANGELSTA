import Image from "next/image";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";
import Link from "next/link";
import mainLogo from "@/public/images/logo-trans.png";
import auth from "@/auth";

const NavMenu: React.FC = async () => {
  const session = await auth();
  return (
    <nav className="bg-white">
      <div className="flex justify-between items-center h-24 w-full px-4 py-12 bg-white text-[#000000] relative ">
        <Link href="/" className="font-bold text-4xl">
          <Image
            src={mainLogo}
            alt="mainlogo"
            width={350}
            height={350}
            className="w-full h-full"
          />
        </Link>
        <ul className="md:flex hidden items-center gap-8">
          <NavLinks session={session} />
        </ul>
        <MobileNav session={session} />
      </div>
    </nav>
  );
};

export default NavMenu;
