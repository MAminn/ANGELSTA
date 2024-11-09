import Image from "next/image";
import bgInvestor from "@/public/images/accent-green-bt-ct.svg";
import graph from "@/public/images/img-fund-bar-graph.svg";

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
          Amplify Your Investment Potential with Syndicate Funds
        </h2>
      </div>

      {/* Graph and Content */}
      <div className='flex flex-col lg:flex-row max-w-6xl mx-auto space-y-8 lg:space-y-0 lg:space-x-12 items-center'>
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

        {/* Investment Opportunities */}
        <div className='lg:w-4/12 space-y-6'>
          <div className='p-6 bg-white rounded-lg shadow-md'>
            <h3 className='text-xl font-bold text-[#0a272b]'>
              Collaborative Investing
            </h3>
            <p className='text-gray-700'>
              Syndicate funds allow you to co-invest with other investors and
              share opportunities.
            </p>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md'>
            <h3 className='text-xl font-bold text-[#0a272b]'>Managed Risk</h3>
            <p className='text-gray-700'>
              Spread the risk across multiple investments while accessing bigger
              deals.
            </p>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md'>
            <h3 className='text-xl font-bold text-[#0a272b]'>Low Fees</h3>
            <p className='text-gray-700'>
              Enjoy low management fees and transparent blockchain transactions
              for secure syndicate fund operations.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className='flex flex-col lg:flex-row items-center justify-between mt-16 px-4 py-6 bg-[#0a1622] rounded-lg'>
        <div className='text-center lg:text-left lg:w-3/4'>
          <h5 className='text-xl font-semibold text-[#87bab3]'>
            Start a Syndicate Fund
          </h5>
          <p className='text-sm text-white mt-2'>
            Join or create syndicate funds to pool resources with other
            accredited investors. Angelsta’s blockchain-powered syndicates allow
            you to combine funds for larger investments and access high-quality
            startups that would be out of reach for individual investors.
          </p>
        </div>
        <div className='mt-6 lg:mt-0 flex space-x-4'>
          <a
            href='#'
            className='bg-[#4d7374] hover:bg-[#87bab0] text-white font-semibold py-2 px-4 rounded shadow-lg'>
            Start a Syndicate Fund
          </a>
        </div>
      </div>
    </section>
  );
};

export default Funding;
