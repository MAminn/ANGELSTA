"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import card1 from "@/public/images/card1.png"
import Image from "next/image";

export function AboutCarousel() {
  return (
    <div className='mx-auto max-w-xs pb-16'>
      <Carousel className='w-full max-w-xs'>
        <CarouselContent>
          <CarouselItem>
            <Card>
              <CardContent className='flex aspect-square items-center justify-start flex-col w-full h-full p-0'>
                <div className=''>
                  <Image
                    src={card1}
                    alt=''
                    width={340}
                    height={130}
                    className=' w-[340px] h-[130px] '
                  />
                </div>
                <div className=' px-4 pt-5'>
                  <p className='text-[30px] leading-[30px] mb-[5px] font-semibold text-left text-[#ffbe00]'>
                    2011
                  </p>
                  <p className=' font-semibold'>AlphaSense Launched</p>
                  <p>Jack Kokko and Raj Neervannan launch AlphaSense.</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardContent className='flex aspect-square items-center justify-center p-6'>
                <div className='text-4xl font-semibold'>Item Card 1</div>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
