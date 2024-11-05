import Image from "next/image";
import icon1 from "@/public/images/icon-analytics.png";
import icon2 from "@/public/images/icon-ratings.png";
import icon3 from "@/public/images/icon-research.png";

const SectionSummary = () => {
  return (
    <section className='relative px-8 py-12 bg-[#0a1622] text-[#d1d6d6]'>
      {/* Decorative SVG divider */}
      <div className='absolute inset-x-0 w-8 mx-auto -top-4'>
        <svg
          className='mx-auto'
          width='24'
          height='30'
          viewBox='0 0 24 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          {/* Updated stroke colors to align with brand */}
          <path
            d='M23.185 15.025L12.135 21.4L1 15.025'
            stroke='#87bab3'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <path
            d='M1 15.025L12.05 8.65002L23.185 15.025'
            stroke='#4d7374'
            strokeWidth='1.5'
            strokeLinecap='round'
            opacity='0.3'
          />
          <path
            d='M12.1351 21.4L12.05 1'
            stroke='#87bab3'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
        </svg>
      </div>

      {/* Main section content */}
      <div className='max-w-5xl mx-auto py-8'>
        {/* Text introduction */}
        <div className='text-center space-y-4 mb-8'>
          <p className='font-bold text-[#87bab3] uppercase'>Our Approach</p>
          <h2 className='text-3xl font-semibold text-[#d1d7d7] lg:text-4xl'>
            A Data-Driven Fund for the Modern Investor
          </h2>
          <h3 className='text-lg text-[#87bab3] lg:text-xl'>
            Leveraging comprehensive market intelligence to identify valuable
            investment opportunities.
          </h3>
        </div>

        {/* Icon Highlights */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3 text-center'>
          {/* Ratings */}
          <div className='space-y-2'>
            <Image
              src={icon2}
              width={64}
              height={64}
              alt='Ratings Icon'
              className='mx-auto'
            />
            <h4 className='text-xl font-bold text-[#d1d6d6]'>Ratings</h4>
            <p className='text-sm text-[#87bab3]'>
              Benchmarked assessments on key market and company indicators.
            </p>
          </div>
          {/* Analytics */}
          <div className='space-y-2'>
            <Image
              src={icon1}
              width={64}
              height={64}
              alt='Analytics Icon'
              className='mx-auto'
            />
            <h4 className='text-xl font-bold text-[#d1d6d6]'>Analytics</h4>
            <p className='text-sm text-[#87bab3]'>
              500+ data points per deal, including real-time investment
              momentum.
            </p>
          </div>
          {/* Research */}
          <div className='space-y-2'>
            <Image
              src={icon3}
              width={64}
              height={64}
              alt='Research Icon'
              className='mx-auto'
            />
            <h4 className='text-xl font-bold text-[#d1d6d6]'>Research</h4>
            <p className='text-sm text-[#87bab3]'>
              In-depth analysis by experts and top VCs to drive informed
              decisions.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className='grid grid-cols-1 gap-6 mt-12 md:grid-cols-3 bg-[#0a272b] p-8 rounded-md text-center'>
          <div>
            <h5 className='text-3xl font-bold text-[#d1d6d6]'>3,700+</h5>
            <p className='text-[#87bab3]'>Equity Raises Reviewed</p>
          </div>
          <div>
            <h5 className='text-3xl font-bold text-[#d1d6d6]'>7,000+</h5>
            <p className='text-[#87bab3]'>Crowdfunding Campaigns Analyzed</p>
          </div>
          <div>
            <h5 className='text-3xl font-bold text-[#d1d6d6]'>$2.3B+</h5>
            <p className='text-[#87bab3]'>Capital Raised in Equity</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSummary;
