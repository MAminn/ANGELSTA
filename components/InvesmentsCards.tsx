import Image from "next/image";
import React from "react";

interface InvesmentsCardsProps {
  img: string;
  text: string;
  strongText: string;
  imgTwo: string;
  number: string;
}

const InvesmentsCards = ({
  img,
  text,
  strongText,
  imgTwo,
  number,
}: InvesmentsCardsProps) => {
  return (
    <div className='col-span-2 px-4 py-8 text-center border rounded-sm md:col-span-1 bg-gray-50'>
      <div className='flex justify-center h-8'>
        <Image
          className='w-full'
          src={img}
          width={300}
          height={300}
          alt='Coinbase'
        />
      </div>
      <p className='py-10 text-3xl font-bold text-slate-600'>{number}</p>
      <div className='pb-4'>
        <p className='text-base'>
          <strong>{strongText}</strong> <br /> {text}
        </p>
      </div>
      <div className='flex justify-center py-4 mx-auto w-36'>
        <Image
          className='w-full'
          src={imgTwo}
          width={300}
          height={300}
          alt='Funders Club'
        />
      </div>
    </div>
  );
};

export default InvesmentsCards;
