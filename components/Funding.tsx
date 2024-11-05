import Image from "next/image";
import bgInvestor from "@/public/images/accent-green-bt-ct.svg";
import graph from "@/public/images/img-fund-bar-graph.svg";
import aquisition from "@/public/images/icon-aquisition.svg";
import iconIpo from "@/public/images/icon-ipo.svg";
import iconRepurchase from "@/public/images/icon-repurchase.svg";
import iconReturn from "@/public/images/icon-returns.svg";

const Funding = () => {
  return (
    <section className='relative overflow-hidden bg-[#d1d7d7] py-16 px-8'>
      {/* Background accent */}
      <div className='absolute top-0 right-0 hidden lg:block'>
        <Image
          src={bgInvestor}
          width={400}
          height={400}
          alt='Background Accent'
          className='opacity-30'
        />
      </div>

      {/* Header */}
      <div className='max-w-7xl mx-auto text-center lg:flex lg:justify-between lg:items-center bg-[#0a272b] py-12 px-6 rounded-lg mb-16'>
        <h2 className='text-3xl font-semibold text-white lg:text-4xl lg:leading-snug'>
          Angelista’s portfolio outperforms market averages by 25%
        </h2>
      </div>

      {/* Graph and statistics */}
      <div className='flex flex-col lg:flex-row max-w-6xl mx-auto space-y-8 lg:space-y-0 lg:space-x-12'>
        {/* Graph */}
        <div className='lg:w-8/12'>
          <Image
            src={graph}
            width={600}
            height={400}
            alt='Funding Graph'
            className='rounded-md shadow-lg'
          />
        </div>

        {/* Stats summary */}
        <div className='lg:w-4/12 space-y-4'>
          <div className='p-6 bg-white rounded-lg shadow-md flex items-center space-x-4'>
            <Image src={iconIpo} width={40} height={40} alt='IPO Icon' />
            <p className='text-gray-700 font-medium'>1 IPO</p>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md flex items-center space-x-4'>
            <Image
              src={aquisition}
              width={40}
              height={40}
              alt='Acquisition Icon'
            />
            <p className='text-gray-700 font-medium'>4 Acquisitions</p>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md flex items-center space-x-4'>
            <Image
              src={iconRepurchase}
              width={40}
              height={40}
              alt='Repurchase Icon'
            />
            <p className='text-gray-700 font-medium'>2 Company Repurchases</p>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md flex items-center space-x-4'>
            <Image src={iconReturn} width={40} height={40} alt='Returns Icon' />
            <p className='text-gray-700 font-medium'>
              2.5x Avg. Unrealized Returns
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className='flex flex-col lg:flex-row items-center justify-between mt-16 px-4 py-6 bg-[#0a1622] rounded-lg'>
        <div className='text-center lg:text-left lg:w-3/4'>
          <h5 className='text-xl font-semibold text-[#87bab3]'>
            Invest in the First Quant VC Fund
          </h5>
          <p className='text-sm text-white mt-2'>
            Our algorithms identify promising investment opportunities, and our
            team verifies selections for fund decisions.
          </p>
        </div>
        <div className='mt-6 lg:mt-0 flex space-x-4'>
          <a
            href='https://calendly.com/chris-kc'
            target='_blank'
            rel='noreferrer'
            className='bg-[#4d7374] hover:bg-[#87bab0] text-white font-semibold py-2 px-4 rounded shadow-lg'>
            Schedule a Call
          </a>
          <a
            href='https://angellist.com/i/oQG7E-u'
            target='_blank'
            rel='noreferrer'
            className='bg-[#0a272b] hover:bg-[#87bab0] text-white font-semibold py-2 px-4 rounded shadow-lg'>
            Invest Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Funding;
