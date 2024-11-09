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

interface NavMenuProps {
  session: Session | null;
}

const MobileNav: React.FC<NavMenuProps> = ({ session }) => {
  const [submenuOpen, setSubmenuOpen] = useState<number | null>(null);

  return (
    <section className='md:hidden'>
      <Sheet>
        <SheetTrigger>
          <FaBars size={24} className='text-[#87bab3]' />
        </SheetTrigger>
        <SheetContent className='bg-[#0a272b] text-white w-full p-6'>
          <ul className='flex flex-col space-y-6 text-center'>
            {links.map((link, idx) => (
              <li key={idx} className='group'>
                <button
                  onClick={() =>
                    setSubmenuOpen(submenuOpen === idx ? null : idx)
                  }
                  className='flex items-center justify-between w-full py-2 text-lg font-medium'>
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
                {link.sublinks && submenuOpen === idx && (
                  <div className='flex flex-col mt-2 space-y-2 text-left pl-4'>
                    {link.sublinks.map((sub, subIdx) => (
                      <SheetClose key={subIdx} asChild>
                        <Link
                          href={sub.path}
                          className='block py-1 text-[#87bab3] text-sm'>
                          {sub.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                )}
              </li>
            ))}
            {session ? (
              <button
                onClick={() => signOut()}
                className='py-4 text-lg text-[#87bab3]'>
                Sign Out
              </button>
            ) : (
              <>
                <Link
                  href='/auth/signin'
                  className='py-4 text-lg text-[#87bab3]'>
                  Login
                </Link>
                <Link
                  href='/auth/signup'
                  className='py-4 text-lg text-[#87bab3]'>
                  Sing up
                </Link>
              </>
            )}
          </ul>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
