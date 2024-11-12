"use client";
import { links } from "@/server/constants";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

interface NavMenuProps {
  session: Session | null;
}

const NavLinks: React.FC<NavMenuProps> = ({ session }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ul className="flex items-center gap-6 text-[13px] xl:text-lg font-semibold">
      {links.slice(0, 5).map((link, index) => (
        <li key={index} className="relative group">
          <Link
            href={link.path || "#"}
            onClick={() =>
              setOpenDropdown(openDropdown === index ? null : index)
            }
            className="flex items-center text-[#d1d7d7] hover:text-[#87bab3] transition-all duration-300"
          >
            {link.name}
            {link.submenu && (
              <span className="ml-1">
                {openDropdown === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            )}
          </Link>
          {link.submenu && openDropdown === index && (
            <div className="absolute top-full left-[-20px] mt-2 w-60 bg-[#0a272b] p-4 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              {link.sublinks?.map((subLink) => (
                <Link
                  key={subLink.name}
                  href={subLink.path}
                  className="block text-sm text-[#d1d7d7] hover:text-[#87bab3] transition-colors duration-200 py-4"
                >
                  {subLink.name}
                </Link>
              ))}
            </div>
          )}
        </li>
      ))}
      {session ? (
        <div className="flex justify-end items-end">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="py-4 text-4xl text-[#87bab3] cursor-pointer"
          >
            <CgProfile />
          </button>
          <div className="relative">
            {menuOpen && (
              <div className="absolute -top-[10px] -left-[100px] mt-2 w-40 bg-white border border-gray-200 shadow-md rounded-xl">
                {/* Arrow pointing to the profile icon */}

                <ul className="py-2 text-black-2 font-semibold flex flex-col justify-start items-center">
                  <Link
                    href={`${
                      session.user?.role === "investor"
                        ? "/portfolio/investments"
                        : "/startup/portfolio"
                    }`}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer "
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
        </div>
      ) : (
        <>
          <Link
            href="/auth/signin"
            className="text-[#87bab3] hover:text-[#d1d7d7] transition-all duration-300"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="text-[#87bab3] hover:text-[#d1d7d7] transition-all duration-300"
          >
            Sign up
          </Link>
        </>
      )}
    </ul>
  );
};

export default NavLinks;
