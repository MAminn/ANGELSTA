"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { links } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";

interface NavMenuProps {
  session: Session | null;
}


const MobileNav: React.FC<NavMenuProps> = (props) => {
   const session = props.session;
  const [submenuOpen, setSubmenuOpen] = useState(false);
  if (session) { 
    return (
      <section className='md:hidden mt-2'>
        <Sheet>
          <SheetTrigger>
            <FaBars size={24} />
          </SheetTrigger>
          <SheetContent className='bg-[#001d21f3] text-white flex justify-center w-full'>
            <ul className='flex flex-col mt-8 text-center'>
              {links.slice(0, 5).map((link, index) => (
                <li key={index} className='relative group py-6'>
                  <li key={index}>
                    {!link.sublinks ? (
                      <Link href={link.path}>{link.name}</Link>
                    ) : (
                      <div>
                        <button
                          onClick={() => setSubmenuOpen(!submenuOpen)}
                          className='flex items-center justify-between w-full py-2'>
                          <span>{link.name}</span>
                          <span>
                            {!submenuOpen ? <FaChevronDown /> : <FaChevronUp />}
                          </span>
                        </button>
                        {submenuOpen && (
                          <div className='space-y-2'>
                            {link.sublinks.map((sub, idx) => (
                              <Link
                                key={idx}
                                href={sub.path}
                                className='block py-2'>
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </li>
                </li>
              ))}
              <button className='py-4' onClick={() => signOut()}>
                Sign Out
              </button>
            </ul>
          </SheetContent>
        </Sheet>
      </section>
    );
    } else {return (
    <section className='md:hidden mt-2'>
      <Sheet>
        <SheetTrigger>
          <FaBars size={24} />
        </SheetTrigger>
        <SheetContent className='bg-[#001d21f3] text-white flex justify-center w-full'>
          <ul className="mt-8 text-center">
            {links.map((link, idx) => (
              <li key={idx} className="py-6">
                {!link.sublinks ? (
                  <Link href={link.path}>{link.name}</Link>
                ) : (
                  <div>
                    <button
                      onClick={() => setSubmenuOpen(!submenuOpen)}
                      className='flex items-center justify-between w-full py-2'>
                      <span>{link.name}</span>
                      <FaChevronDown />
                    </button>
                    {submenuOpen && (
                      <div className='ml-4 space-y-2'>
                        {link.sublinks.map((sub, idx) => (
                          <Link
                            key={idx}
                            href={sub.path}
                            className='block py-2'>
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </section>
  );} 
  
};

export default MobileNav;