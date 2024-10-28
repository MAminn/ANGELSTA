import Link from "next/link";
import React from "react";

interface ItemCardProps {
  title?: string;
  desc?: string;
  href: string;
}

const ItemCard = ({ title, desc, href }: ItemCardProps) => {
  return (
    /* From Uiverse.io by Javierrocadev */
    <div className="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-[#4d7275] hover:-translate-y-2 hover:shadow-xl shadow-gray-300">
      <div className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg bg-[#d0d6d7]"></div>

      <div className="">
        <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>
        <p className="text-white line-clamp-3">{desc}</p>
      </div>
      <Link
        href={href}
        className="hover:bg-[#86bab1] bg-gray-200 transition duration-400 text-gray-800 mt-6 rounded-lg p-2 px-6"
      >
        Explore
      </Link>
    </div>
  );
};

export default ItemCard;
