import Image from "next/image";
import bgInvestor from "@/public/images/accent-green-bt-ct.svg";

const Capital = () => {
  return (
    <section className='relative px-8 py-40 overflow-hidden bg-gray-50 capital-section'>
      {/* <!-- accents --> */}
      <div className='hidden lg:block absolute -top-40 xl:top-52 right-8 w-96 h-96 xl:w-[30em] xl:h-[30em]'>
        <Image
          src={bgInvestor}
          width={800}
          height={500}
          alt='capital'
          className='w-full'
        />
      </div>
      <div className='absolute hidden lg:block top-1/2 left-28 w-96 h-96 xl:w-96 xl:h-96'>
        <Image
          src={bgInvestor}
          width={800}
          height={500}
          alt='capital'
          className='w-full'
        />
      </div>
      <div className='relative space-y-8 content-wrap capital-content'>
        {/* <!-- capital entry --> */}
        <div className='max-w-2xl mx-auto xl:max-w-3xl capital-content-entry'>
          <div className='text-center'>
            <div className='pb-8 mx-auto w-52 md:w-60 xl:w-64'>
              <h2 className='text-4xl font-bold'>ANGELISTA</h2>
            </div>
            <div className='space-y-3'>
              <h2 className='text-2xl font-semibold'>
                You will be among the pioneers, investing in the first online
                quantitative VC fund.{" "}
              </h2>

              <p>
                The Angelista Capital Fund is scalable, cost-effective, and
                time-efficient. With one click, you can gain portfolio
                diversification and access a new, differentiated return stream.{" "}
              </p>

              <p>
                You will get access to portfolio details and updates via our
                Kingscrowd portfolio software.
              </p>

              <p>
                Note: only accredited investors may participate at this time.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- capital content items --> */}
        <div
          id='capitalContentItems'
          className='mx-auto max-w-7xl capital-content-items'>
          <div className='justify-center w-full gap-4 space-y-8 md:space-y-0 md:flex md:flex-row md:flex-wrap justify-items-stretch'>
            <div className='flex flex-col items-center justify-center h-40 p-4 space-y-1 text-center border-2 rounded-md shadow-md capital-content__item xl:shadow-sm md:w-2/5 lg:w-1/4 bg-slate-100 border-slate-200'>
              <p className='text-2xl font-bold text-gray-600'>Fund Size</p>
              <p className='text-base'>$10M</p>
            </div>

            <div className='flex flex-col items-center justify-center h-40 p-4 space-y-1 text-center border-2 rounded-md shadow-md capital-content__item xl:shadow-sm md:w-2/5 lg:w-1/4 bg-slate-100 border-slate-200'>
              <p className='text-2xl font-bold text-gray-600'>Term</p>
              <p className='text-base'>10 Years</p>
            </div>

            <div className='flex flex-col items-center justify-center h-40 p-4 space-y-1 text-center border-2 rounded-md shadow-md capital-content__item xl:shadow-sm md:w-2/5 lg:w-1/4 bg-slate-100 border-slate-200'>
              <p className='text-2xl font-bold text-gray-600'>LPs</p>
              <p className='text-base'>Up to 250 (Accredited Investors)</p>
            </div>

            <div className='flex flex-col items-center justify-center h-40 p-4 space-y-1 text-center border-2 rounded-md shadow-md capital-content__item xl:shadow-sm md:w-2/5 lg:w-1/4 bg-slate-100 border-slate-200'>
              <p className='text-2xl font-bold text-gray-600'>Fees</p>
              <p className='text-base'>1% Management Fee, 10% Carry</p>
            </div>

            <div className='flex flex-col items-center justify-center h-40 p-4 space-y-1 text-center border-2 rounded-md shadow-md capital-content__item xl:shadow-sm md:w-2/5 lg:w-1/4 bg-slate-100 border-slate-200'>
              <p className='text-2xl font-bold text-gray-600'>
                Min. Investment
              </p>
              <p className='text-base'>$20K</p>
            </div>

            <div className='flex flex-col items-center justify-center h-40 p-4 space-y-1 text-center border-2 rounded-md shadow-md capital-content__item xl:shadow-sm md:w-2/5 lg:w-1/4 bg-slate-100 border-slate-200'>
              <p className='text-2xl font-bold text-gray-600'>Fund Admin</p>
              <p className='text-base'>AngelList</p>
            </div>

            <div className='flex flex-col items-center justify-center h-40 p-4 space-y-1 text-center border-2 rounded-md shadow-md capital-content__item xl:shadow-sm md:w-2/5 lg:w-1/4 bg-slate-100 border-slate-200'>
              <p className='text-2xl font-bold text-gray-600'>
                Management Entity
              </p>
              <p className='text-base text-center'>
                Kingscrowd Capital, LLC{" "}
                <span className='block'>(Wholly owned by Angelista, Inc.)</span>
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Capital;
