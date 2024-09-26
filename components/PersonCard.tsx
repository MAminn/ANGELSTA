import Image from "next/image";
import React from "react";

interface PersonCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: string | any;
  title?: string;
  desc?: string;
}

const PersonCard = ({ image, title, desc }: PersonCardProps = {}) => {
  return (
    <div className=" flex flex-col justify-start items-center gap-5 mb-5">
      <div className="">
        <Image
          src={image}
          alt=""
          width={270}
          height={270}
          className="w-[270px] h-[270px]"
        />
      </div>
      <div className=" flex flex-col justify-start items-center ">
        <p className="text-[16px] font-bold">{title}</p>
        <p className="text-[16px]">{desc}</p>
      </div>
    </div>
  );
};

export default PersonCard;
