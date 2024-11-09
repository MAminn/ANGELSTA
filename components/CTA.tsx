import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section
      id='ctaSection'
      className='px-8 py-20 bg-[#4c7375] lg:py-32 cta-section'>
      <div className='mx-auto text-center space-y-14'>
        <p className='text-5xl font-bold text-white lg:text-6xl xl:text-7xl'>
          Start Growing Your Portfolio Today with Angelsta
        </p>
        <div className='flex justify-center'>
          <div className='flex items-center justify-center gap-1 mx-auto md:justify-start lg:mx-0 md:gap-2'>
            <Link
              href='/'
              target='_blank'
              className='inline-flex items-center px-1.5 py-2 text-xs font-bold text-white border border-transparent rounded-md shadow md:px-4 md:text-sm lg:text-base bg-[#0b272d] hover:bg-[#87bab0] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 hover:shadow-lg'
              rel='noreferrer'
              title='Schedule a Call'>
              Sign Up as an Investor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
