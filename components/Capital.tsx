import Image from "next/image";
import bgInvestor from "@/public/images/accent-green-bt-ct.svg";

const Capital = () => {
  return (
    <section className='relative px-8 py-40 overflow-hidden bg-gradient-to-b from-gray-50 to-[#d1d7d7]'>
      {/* Accents */}
      <div className='hidden lg:block absolute -top-40 xl:top-52 right-8 w-96 h-96 xl:w-[30em] xl:h-[30em] opacity-30'>
        <Image
          src={bgInvestor}
          width={800}
          height={500}
          alt='AI Insights Background'
          className='w-full'
        />
      </div>
      <div className='absolute hidden lg:block top-1/2 left-28 w-96 h-96 xl:w-96 xl:h-96 opacity-30'>
        <Image
          src={bgInvestor}
          width={800}
          height={500}
          alt='AI Insights Background'
          className='w-full'
        />
      </div>

      {/* Content */}
      <div className='relative max-w-4xl mx-auto text-center space-y-8'>
        {/* Headline Section */}
        <div className='text-center'>
          <h2 className='text-4xl font-bold text-[#0a272b]'>
            Stay Ahead with AI-Driven Market Insights
          </h2>
          <h3 className='text-2xl font-semibold text-[#4d7374] mt-4'>
            Gain access to real-time AI-powered market analysis tailored
            specifically for the MENA region.
          </h3>
          <p className='text-lg text-gray-700 mt-4'>
            Track industry trends, evaluate startup performance, and make smart
            investment decisions using AI-driven intelligence on sectors like
            fintech, healthtech, and green energy.
          </p>
        </div>

        {/* Key Insights Items */}
        <div className='mx-auto max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {[
            {
              label: "Sector-Specific Insights",
              value: "Reports on fintech, healthtech, green energy, and more.",
            },
            {
              label: "Competitive Analysis",
              value:
                "Compare startups and identify top investment opportunities.",
            },
            {
              label: "Growth Forecasts",
              value: "AI-powered predictions for returns and risk factors.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center h-40 p-9 space-y-2 text-center border-2 border-[#87bab3] rounded-md shadow-md bg-[#f4f6f8] hover:bg-[#e0e6e6] transition-colors duration-200'>
              <p className='text-2xl font-bold text-[#0a1622]'>{item.label}</p>
              <p className='text-base text-gray-600'>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='mt-8 flex justify-center'>
          <a
            href='#'
            className='bg-[#4d7374] hover:bg-[#87bab0] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300'>
            Explore Market Insights
          </a>
        </div>
      </div>
    </section>
  );
};

export default Capital;
