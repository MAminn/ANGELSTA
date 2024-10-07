"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { links } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa6";

const MobileNav = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  return (
    <section className='md:hidden mt-2'>
      <Sheet>
        <SheetTrigger>
          <FaBars size={24} />
        </SheetTrigger>
        <SheetContent className='bg-[#001d21f3] text-white flex justify-center w-full'>
          {/* <SheetTrigger>
                  <FaTimes size={24} />
                </SheetTrigger> */}
          <ul>
            <li>
              <Link href='/' className='py-7 px-3 inline-block'>
                Home
              </Link>
            </li>
            {links.map((link, idx) => (
              <li key={idx}>
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
  );
};

export default MobileNav;
