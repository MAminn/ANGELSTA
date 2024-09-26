import Image from 'next/image'
import bgInvestor from "@/public/images/accent-green-bt-ct.svg";
import graph from '@/public/images/img-fund-bar-graph.svg';
import aquisition from '@/public/images/icon-aquisition.svg';
import iconIpo from '@/public/images/icon-ipo.svg';
import iconRepurchase from '@/public/images/icon-repurchase.svg';
import iconReturn from '@/public/images/icon-returns.svg';




const Funding = () => {
  return (
    <section
      id='sectionFunding'
      className='relative overflow-hidden bg-gray-100 snap-start snap-mandatory scroll-mt-44 funding-section'>
      {/* <!-- accent --> */}
      <div className='absolute -top-56 -right-72 hidden w-[48rem] xl:w-[64rem] lg:block'>
        <Image
          src={bgInvestor}
          width={800}
          height={500}
          alt='capital'
          className='w-full'
        />
      </div>
      {/* <!-- funding hero banner--> */}
      <div
        id='fundingHero'
        className='relative w-full mx-auto lg:max-w-6xl xl:max-w-7xl funding-hero'>
        <div className='absolute top-0 hidden w-3/4 h-full -ml-48 bg-indigo-600 lg:block lg:-left-72 xl:-left-96'>
          &nbsp;
        </div>
        {/*  */}
        {/* <!-- hero entry --> */}
        <div
          id='fundingHeroEntry'
          className='relative grid grid-cols-1 gap-0 md:grid-cols-12 funding-hero__entry'>
          <div className='relative col-span-12 px-8 py-20 mx-auto bg-indigo-600 lg:col-span-10 xl:col-span-12 lg:pr-16 lg:rounded-r-lg 2xl:pl-0 xl:mx-0'>
            <h2 className='text-2xl font-bold text-white md:text-4xl lg:text-5xl xl:text-6xl'>
             Angelista’s portfolio of highly rated companies has 25% higher
              unrealized returns than market average
            </h2>
          </div>
        </div>
      </div>
      <div
        id='fundingGraph'
        className='relative px-8 py-20 mx-auto space-y-6 max-w-7xl funding-graph'>
        <div className='grid grid-cols-1 xl:grid-cols-12'>
          {/* <!-- graph --> */}
          <div
            id='fundingGraphBarGraph'
            className='col-span-1 lg:col-span-10 funding-graph__bar-graph'>
            <Image
              src={graph}
              width={200}
              height={200}
              alt='graph'
              className='w-full'
            />
          </div>

          {/* <!-- graph sumary --> */}
          <div
            id='fundingGraphItems'
            className='col-span-1 space-y-4 lg:col-span-2 funding-graph-items'>
            <div className='grid gap-4 pt-8 xl:pt-0 md:grid-cols-2 xl:grid-cols-1 xl:gap-x-0 xl:gap-y-2'>
              {/* 
                <!-- IPO --> */}
              <div className='p-4 space-y-3 border border-gray-200 rounded-sm bg-gray-50 funding-graph-item'>
                <div className='w-8 h-8 icon'>
                  <Image
                    src={iconIpo}
                    width={200}
                    height={200}
                    alt='Ipo'
                    className='w-full'
                  />
                </div>
                <p>1 IPO</p>
              </div>
              {/* 
                <!-- Acquisitions --> */}
              <div className='p-4 space-y-3 border border-gray-200 rounded-sm bg-gray-50 funding-graph-item'>
                <div className='w-8 h-8 icon'>
                  <Image
                    src={aquisition}
                    width={200}
                    height={200}
                    alt='aquisition'
                    className='w-full'
                  />
                </div>
                <p>4 Acquisitions</p>
              </div>

              {/* <!--Repurchases --> */}
              <div className='p-4 space-y-3 border border-gray-200 rounded-sm bg-gray-50 funding-graph-item'>
                <div className='w-8 h-8 icon'>
                  <Image
                    src={iconRepurchase}
                    width={200}
                    height={200}
                    alt='iconRepurchase'
                    className='w-full'
                  />
                </div>
                <p>2 Company Repurchases</p>
              </div>

              {/* <!--Returns --> */}
              <div className='p-4 space-y-3 border border-gray-200 rounded-sm bg-gray-50 funding-graph-item'>
                <div className='w-8 h-8 icon'>
                  <Image
                    src={iconReturn}
                    width={200}
                    height={200}
                    alt='aquisition'
                    className='w-full'
                  />
                </div>
                <p>2.5x Avg. Unrealized Returns</p>
              </div>
            </div>
          </div>
        </div>

        <div
          id='fundingSummary'
          className='grid grid-cols-1 gap-8 p-8 rounded-md lg:grid-cols-12 bg-slate-200 funding-summary'>
          <div className='col-span-1 space-y-4 lg:col-span-8'>
            <h5 className='text-xl font-semibold'>
              Invest in the first quant VC fund in the online private markets
            </h5>
            <p>
              Our algorithm will source and vet new investment opportunities.
              Then our team will verify selections and make final investment
              decisions for the fund.
            </p>
          </div>
          <div className='col-span-1 lg:col-span-4'>
            <div className='flex items-center justify-center gap-1 mx-auto md:justify-start lg:mx-0 md:gap-2'>
              <a
                href='https://calendly.com/chris-kc'
                target='_blank'
                className='inline-flex items-center px-1.5 py-2 text-xs font-bold text-white border border-transparent rounded-md shadow md:px-4 md:text-sm lg:text-base bg-emerald-600 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 hover:shadow-lg'
                rel='noreferrer'
                title='Schedule a Call'>
                Schedule<span className='hidden mx-1 md:block'> a </span> Call
              </a>
              <a
                href='https://angellist.com/i/oQG7E-u'
                target='_blank'
                className='inline-flex items-center px-1.5 py-2 text-xs font-bold text-white bg-indigo-600 border border-transparent rounded-md shadow md:px-4 md:text-sm lg:text-base hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 hover:shadow-lg'
                rel='noreferrer'
                title='Invest Now'>
                Invest Now
              </a>
            </div>{" "}
          </div>
        </div>
      </div>{" "}
    </section>
  );
}

export default Funding