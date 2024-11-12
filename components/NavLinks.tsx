"use client";
import { links } from "@/server/constants";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

interface NavMenuProps {
  session: Session | null;
}

const NavLinks: React.FC<NavMenuProps> = ({ session }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

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
        <button
          onClick={() => signOut()}
          className="text-[#87bab3] hover:text-[#d1d7d7] transition-all duration-300"
        >
          Sign Out
        </button>
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
