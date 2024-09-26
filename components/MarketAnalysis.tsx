import analysis from '@/public/images/analysis.jpg'
import Image from 'next/image';
import Link from 'next/link';

const MarketAnalysis = () => {
  return (
    <section className='bg-[#001d21f3] text-white w-full py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 max-md:gap-6'>
        <div className='flex flex-col items py-4 gap-4 max-md:text-center'>
          <p className='leading-4 text-[0.875rem] font-bold'>SOLUTIONS</p>
          <h1 className='text-4xl font-bold max-lg:text-[34px] leading-[42px]'>
            The key perspectives you need all in one place
          </h1>
          <p>
            Make faster, more confident decisions with an extensive universe of
            public, private, and proprietary content sources in one easy-to-use,
            powerful platform.
          </p>
          <Link href='/marketAnalysis'>
            <button className='font-bold bg-white text-[#000000] rounded-full py-[0.375rem] px-5 hover:bg-[#000] hover:text-white transition ease-out duration-300 mt-4'>
              Start my free trail
            </button>
          </Link>
        </div>
        <div className=''>
          <Image
            src={analysis}
            width={500}
            height={500}
            alt='analysis'
            className='rounded-3xl mx-auto my-4'
          />
        </div>
      </div>
    </section>
  );
}

export default MarketAnalysis