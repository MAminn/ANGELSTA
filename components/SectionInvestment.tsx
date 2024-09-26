import Image from "next/image";
import investor from "@/public/images/img-capital-hero.svg";
import bgInvestor from "@/public/images/accent-green-bt-ct.svg";
import angel from "@/public/images/img-logo-angellist.svg";
import invesment1 from "@/public/images/investmentOne.svg";
import invesment2 from "@/public/images/investmentOneBottom.svg";
import invesment3 from "@/public/images/investmentTwo.svg";
import invesment4 from "@/public/images/investmentsThree.svg";
import invesment5 from "@/public/images/investmentThreeBottom.svg";
import invesment6 from "@/public/images/img-logo-mevo.svg";

import Link from "next/link";
import InvesmentsCards from './InvesmentsCards';

const SectionInvestment = () => {
  return (
    <section className='pt-0 pb-8 overflow-hidden lg:pt-8'>
      <div className='relative w-full mx-auto lg:max-w-6xl xl:max-w-7xl mt-8'>
        <div className='absolute top-0 hidden w-3/4 h-full -ml-48 bg-indigo-600 lg:block lg:-left-72 xl:-left-96'></div>
        <div className='relative grid grid-cols-12 gap-0'>
          <div className='absolute hidden w-[40rem] xl:w-[40rem] lg:block lg:left-2/3 xl:left-1/2'>
            <Image
              src={bgInvestor}
              width={800}
              height={500}
              alt='capital'
              className='w-full'
            />
          </div>
          <div className='relative col-span-12 px-8 py-20 mx-auto bg-indigo-600 lg:max-w-4xl lg:pr-16 lg:rounded-r-lg 2xl:pl-0 xl:mx-0 xl:col-span-7'>
            <h1 className='text-5xl font-bold text-white md:text-6xl'>
              The First Data-Driven Fund in the Online Private Market
            </h1>
          </div>
          <div className='hidden absolute xl:block lg:top-8 lg:-right-12 lg:w-[40rem]'>
            <Image src={investor} className='w-full' alt='capital' />
          </div>
        </div>
      </div>
      <div className='relative px-8 py-8 space-y-8'>
        <div className='grid grid-cols-12 gap-4 mx-auto xl:items-end max-w-7xl'>
          <div className='col-span-12 space-y-4 text-center lg:col-span-5 xl:col-span-4 lg:text-left lg:pl-8'>
            <p className='text-2xl font-bold text-slate-600'>
              Invest in a diversified portfolio of 100 highly rated startups.*
            </p>
            <div className='flex'>
              <div className='flex items-center justify-center gap-1 mx-auto md:justify-start lg:mx-0 md:gap-2'>
                <Link
                  href='/'
                  className='inline-flex items-center px-1.5 py-2 text-xs font-bold text-white border border-transparent rounded-md shadow md:px-4 md:text-sm lg:text-base bg-emerald-600 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 hover:shadow-lg'>
                  Schedule
                  <span className='hidden mx-1 md:block'>a</span>
                  Call
                </Link>
                <Link
                  href='/'
                  className='inline-flex items-center px-1.5 py-2 text-xs font-bold text-white bg-indigo-600 border border-transparent rounded-md shadow md:px-4 md:text-sm lg:text-base hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 hover:shadow-lg'>
                  Invest now
                </Link>
              </div>
            </div>
            <p className='font-semibold text-slate-600'>
              *Only accredited investors may join at this time
            </p>
          </div>
          <div className='col-span-12 space-y-4 text-center lg:col-span-5 xl:col-span-2 lg:text-left'>
            <div className='w-1/2 mx-auto lg:mx-0 sm:w-1/3 xl:w-auto'>
              <p className='text-sm font-semibold text-gray-600'>
                In partnership with
              </p>
              <Image
                src={angel}
                width={200}
                height={200}
                alt='list'
                className='w-full'
              />
            </div>
          </div>
        </div>
        <div className='mx-auto space-y-2 max-w-7xl'>
          <div className='relative grid grid-cols-2 gap-2 xl:grid-cols-4'>
            <InvesmentsCards
              img={invesment1}
              text='First Crowd Round on:'
              strongText='9 Years'
              number='4300x'
              imgTwo={invesment2}
            />
            <InvesmentsCards
              img={invesment3}
              text='First Crowd Round on:'
              strongText='9 Years'
              number='4300x'
              imgTwo={invesment2}
            />
            <InvesmentsCards
              img={invesment4}
              text='First Crowd Round on:'
              strongText='9 Years'
              number='4300x'
              imgTwo={invesment5}
            />
            <InvesmentsCards
              img={invesment6}
              text='First Crowd Round on:'
              strongText='9 Years'
              number='4300x'
              imgTwo={invesment5}
            />
          </div>
          <div className='px-12 py-8 text-center bg-indigo-600 rounded-sm'>
            <p className='text-3xl font-bold text-white'>
              The next unicorns are raising online now
            </p>
          </div>
        </div>
        <p className='text-2xl font-semibold text-center'>
          Join the first quant fund focused on startup investment opportunities
        </p>
      </div>
    </section>
  );
}

export default SectionInvestment