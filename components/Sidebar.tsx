"use client";
import { cn } from "@/server/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface LinkItem {
  path: string;
  imgURL: string;
  label: string;
}

interface SidebarProps {
  links: LinkItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  const pathname = usePathname();

  return (
    <section className="sidebar bg-[#001d21f3] text-white z-50">
      <nav className="flex flex-col gap-4">
        {links.map((link, index) => {
          const isActive =
            pathname === link.path || pathname.startsWith(`${link.path}/`);
          return (
            <Link
              href={link.path}
              key={index}
              className={cn("sidebar-link group max-sm:px-4 max-sm:mx-4", {
                "bg-bank-gradient": isActive,
              })}
            >
              <div className="flex gap-2">
                <div className="relative size-6">
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
                  className={cn("sidebar-label hidden lg:block", {
                    "text-white": isActive,
                  })}
                >
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
