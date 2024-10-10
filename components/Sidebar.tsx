"use client";


import { SidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";





const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className='sidebar bg-[#001d21f3] text-white'>
      <nav className='flex flex-col gap-4'>
        {/* <h3 className='text-3xl sidebar-logo'>{title}</h3> */}
        {SidebarLinks.map((link, index) => {
          const isActive =
            pathname === link.path || pathname.startsWith(`${link.path}/`);
          return (
            <Link
              href={link.path}
              key={index}
              className={cn("sidebar-link group max-sm:px-4 max-sm:mx-4", {
                "bg-bank-gradient": isActive,
              })}>
              <div className=' flex gap-2'>
                <div className='relative size-6'>
                  <Image
                    src={link.imgURL}
                    alt={link.label}
                    fill
                    className={cn({
                      "brightness-[3] invert-0": isActive,
                    })}
                  />
                </div>
                <p
                  className={cn(
                    "sidebar-label hidden lg:block group-hover:block ",
                    {
                      "text-white": isActive,
                    }
                  )}>
                  {link.label}
                </p>
              </div>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
