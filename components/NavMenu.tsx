"use client";
import { navLinks } from "@/constants";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";

interface NavMenuProps {
  session: Session | null;
}

const NavMenu: React.FC<NavMenuProps> = (props) => {
  // const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  // const toggleDropdown = (index: number) => {
  //   setDropdownOpen(dropdownOpen === index ? null : index);
  // };
  const session = props.session;

  if (session) {
    return (
      <>
        <div className="flex justify-between items-center h-24 max-w-[1240px] w-full px-4 py-12 bg-white text-[#000000] relative">
          <Link href="/" className="font-bold text-4xl">
            ANGELSTA
          </Link>
          <ul className="flex max-md:hidden">
            {navLinks.slice(0, 4).map((link, index) => (
              <li key={index} className="relative group">
                <Link
                  href={link.path}
                  className="text-[#000]  px-6 py-4 rounded"
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <ul className="absolute hidden group-hover:block bg-white text-gray-800 left-0 mt-2 p-2 rounded shadow-lg">
                    {link.dropdown.map((submenu, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={submenu.path}
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          {submenu.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <button onClick={() => signOut()}>Sign Out</button>
          </ul>
          <MobileNav />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex justify-between items-center h-24 max-w-[1240px] w-full px-4 py-12 bg-white text-[#000000] relative">
          <Link href="/" className="font-bold text-4xl">
            ANGELSTA
          </Link>
          <ul className="flex max-md:hidden">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <Link
                  href={link.path}
                  className="text-[#000]  px-6 py-4 rounded"
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <ul className="absolute hidden group-hover:block bg-white text-gray-800 left-0 mt-2 p-2 rounded shadow-lg">
                    {link.dropdown.map((submenu, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={submenu.path}
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          {submenu.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <MobileNav />
        </div>
      </>
    );
  }
};

export default NavMenu;
