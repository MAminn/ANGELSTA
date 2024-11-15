"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { links } from "@/server/constants";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import { CgProfile } from "react-icons/cg";

interface NavMenuProps {
  session: Session | null;
}

const MobileNav: React.FC<NavMenuProps> = ({ session }) => {
  const [submenuOpen, setSubmenuOpen] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <FaBars size={24} className="text-[#87bab3]" />
        </SheetTrigger>
        <SheetContent className="bg-[#0a272b] text-white w-full p-6">
          <ul className="flex flex-col space-y-6 text-center">
            {links.map((link, idx) => (
              <li key={idx} className="group">
                {link.path ? (
                  <SheetClose asChild>
                    <Link
                      href={link.path}
                      onClick={() =>
                        setSubmenuOpen(submenuOpen === idx ? null : idx)
                      }
                      className="flex items-center justify-between w-full py-2 text-lg font-medium"
                    >
                      <span>{link.name}</span>
                      {link.sublinks && (
                        <span>
                          {submenuOpen === idx ? (
                            <FaChevronUp />
                          ) : (
                            <FaChevronDown />
                          )}
                        </span>
                      )}
                    </Link>
                  </SheetClose>
                ) : (
                  <button
                    onClick={() =>
                      setSubmenuOpen(submenuOpen === idx ? null : idx)
                    }
                    className="flex items-center justify-between w-full py-2 text-lg font-medium"
                  >
                    <span>{link.name}</span>
                    {link.sublinks && (
                      <span>
                        {submenuOpen === idx ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </span>
                    )}
                  </button>
                )}
                {link.sublinks && submenuOpen === idx && (
                  <div className="flex flex-col mt-2 space-y-2 text-left pl-4">
                    {link.sublinks.map((sub, subIdx) => (
                      <SheetClose key={subIdx} asChild>
                        {sub.path ? (
                          <Link
                            href={sub.path}
                            className="block py-1 text-[#87bab3] text-sm"
                          >
                            {sub.name}
                          </Link>
                        ) : (
                          <span className="block py-1 text-[#87bab3] text-sm">
                            {sub.name}
                          </span>
                        )}
                      </SheetClose>
                    ))}
                  </div>
                )}
              </li>
            ))}

            {session ? (
              <div className="flex justify-end items-end h-[400px]">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="py-4 text-4xl text-[#87bab3] cursor-pointer"
                >
                  <CgProfile />
                </button>
                <SheetClose asChild>
                  <div className="relative">
                    {menuOpen && (
                      <div className="absolute top-[-80px] -left-[215px] mt-2 w-40 bg-white border border-gray-200 shadow-md rounded-xl">
                        {/* Arrow pointing to the profile icon */}
                        <div className="absolute top-1/2 -right-3 transform -translate-y-1/2">
                          <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white"></div>
                        </div>

                        <ul className="py-2 text-black-2 font-semibold">
                          <Link
                            href={`${
                              session.user?.role === "investor"
                                ? "/portfolio/investments"
                                : "/startup/portfolio"
                            }`}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            My Profile
                          </Link>
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => signOut()}
                          >
                            Sign Out
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </SheetClose>
              </div>
            ) : (
              <>
                <SheetClose asChild>
                  <Link
                    href="/auth/signin"
                    className="py-4 text-lg text-[#87bab3]"
                  >
                    Login
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/auth/signup"
                    className="py-4 text-lg text-[#87bab3]"
                  >
                    Sign up
                  </Link>
                </SheetClose>
              </>
            )}
          </ul>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
