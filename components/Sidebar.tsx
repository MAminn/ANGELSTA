"use client";

import { cn } from "@/lib/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarLinks {
  label: string;
  path: string;
}

interface SidebarProps {
  title?: string;
  links: SidebarLinks[];
}

const Sidebar = ({ title, links }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <section className='sidebar bg-[#001d21f3] text-white'>
      <nav className='flex flex-col gap-4'>
        <h3 className='text-3xl sidebar-logo'>{title}</h3>
        {links.map((link, index) => {
          const isActive =
            pathname === link.path || pathname.startsWith(`${link.path}/`);
          return (
            <Link
              href={link.path}
              key={index}
              className={cn("sidebar-link group", {
                "bg-bank-gradient": isActive,
              })}>
              <div className=' flex gap-2'>
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
