import React from "react";

interface ItemCardProps {
  icon?: JSX.Element;
  title?: string;
  desc?: string;
}

const ItemCard = ({ icon, title, desc }: ItemCardProps) => {
  return (
    <div className=" flex-col justify-center items-center gap-16 w-full h-[470px] bg-[white] rounded-xl shadow-xl p-10  ">
      <div className=" flex justify-center items-center ">{icon}</div>
      <div>
        <h1 className=" text-center mt-6 text-[1.75rem] text-[#4d4d4d] leading-[1.07] font-semibold ">
          {title}
        </h1>
        <p className=" text-center mt-12 text-[1.125rem] leading-[1.44] text-[#6e6e6e] ">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
