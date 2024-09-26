import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";

const MobileNav = () => {
  return (
    <section className='md:hidden w-full max-w-[264px] flex justify-end items-start'>
      <Sheet>
        <SheetTrigger>
          <GiHamburgerMenu className='text-2xl mt-3' />
        </SheetTrigger>
        <SheetContent className='bg-[#001d21f3] text-white flex justify-center'>
          <SheetClose asChild>
            <div className='mobilenav-sheet'>
              <ul className='flex flex-col mt-12 items-center'>
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.path}
                    className='pt-16 text-2xl'>
                    {link.label}
                  </Link>
                ))}
              </ul>
            </div>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
