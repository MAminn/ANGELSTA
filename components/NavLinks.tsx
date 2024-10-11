"use client";
import { links } from "@/constants";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";

interface NavMenuProps {
  session: Session | null;
}

const NavLinks: React.FC<NavMenuProps> = (props) => {
  const session = props.session;

  if (session) {
    return (
      <>
        <div className="flex justify-between items-center h-24 max-w-[1240px] w-full px-4 py-12 bg-white text-[#000000] relative z-20">
          <ul className="flex max-md:hidden">
            {links.slice(0, 5).map((link, index) => (
              <li key={index} className="relative group">
                <Link
                  href={link.path}
                  className="text-[#000]  px-6 py-4 rounded"
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div>
                    <div className="absolute top-full left-5 hidden group-hover:md:block hover:md:block">
                      <div className="py-3">
                        <div className="w-4 h-4 absolute left-3 mt-1 bg-white rotate-45"></div>
                      </div>
                      <div className="bg-white p-4  rounded-lg">
                        {link.sublinks?.map((subLinks) => (
                          <div key={subLinks.name}>
                            <li className="text-sm text-gray-600 my-2.5">
                              <Link
                                href={subLinks.path}
                                className="hover:text-[#000] font-semibold"
                              >
                                {subLinks.name}
                              </Link>
                            </li>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
            <button onClick={() => signOut()}>Sign Out</button>
          </ul>
          <MobileNav session={session} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="flex justify-around items-center h-24 w-full px-4 py-12 bg-white text-[#000000] relative">
          <ul className="flex max-md:hidden">
            {links.map((link, index) => (
              <li key={index} className="relative group">
                <Link
                  href={link.path}
                  className="text-[#000]  px-6 py-4 rounded"
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div>
                    <div className="absolute top-full left-5 hidden group-hover:md:block hover:md:block">
                      <div className="py-3">
                        <div className="w-4 h-4 absolute left-3 mt-1 bg-white rotate-45"></div>
                      </div>
                      <div className="bg-white p-4  rounded-lg">
                        {link.sublinks?.map((subLinks) => (
                          <div key={subLinks.name}>
                            <li className="text-sm text-gray-600 my-2.5">
                              <Link
                                href={subLinks.path}
                                className="hover:text-[#000] font-semibold"
                              >
                                {subLinks.name}
                              </Link>
                            </li>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <MobileNav session={session} />
        </div>
      </>
    );
  }
};

export default NavLinks;
