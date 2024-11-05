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
          alt='capital'
          className='w-full'
        />
      </div>
      <div className='absolute hidden lg:block top-1/2 left-28 w-96 h-96 xl:w-96 xl:h-96 opacity-30'>
        <Image
          src={bgInvestor}
          width={800}
          height={500}
          alt='capital'
          className='w-full'
        />
      </div>

      {/* Content */}
      <div className='relative max-w-4xl mx-auto text-center space-y-8'>
        {/* Capital Entry */}
        <div className='text-center'>
          <h2 className='text-4xl font-bold text-[#0a272b]'>ANGELISTA</h2>
          <h3 className='text-2xl font-semibold text-[#4d7374] mt-4'>
            You will be among the pioneers, investing in the first online
            quantitative VC fund.
          </h3>
          <p className='text-lg text-gray-700 mt-4'>
            The Angelista Capital Fund is scalable, cost-effective, and
            time-efficient. With one click, you can gain portfolio
            diversification and access a new, differentiated return stream.
          </p>
          <p className='text-lg text-gray-700 mt-2'>
            You will get access to portfolio details and updates via our
            Kingscrowd portfolio software.
          </p>
          <p className='text-lg text-gray-500 mt-2 italic'>
            Note: only accredited investors may participate at this time.
          </p>
        </div>

        {/* Capital Content Items */}
        <div className='mx-auto max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {[
            { label: "Fund Size", value: "$10M" },
            { label: "Term", value: "10 Years" },
            { label: "LPs", value: "Up to 250 (Accredited Investors)" },
            { label: "Fees", value: "1% Management Fee, 10% Carry" },
            { label: "Min. Investment", value: "$20K" },
            { label: "Fund Admin", value: "AngelList" },
            {
              label: "Management Entity",
              value:
                "Kingscrowd Capital, LLC (Wholly owned by Angelista, Inc.)",
            },
          ].map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center h-40 p-6 space-y-2 text-center border-2 border-[#87bab3] rounded-md shadow-md bg-[#f4f6f8] hover:bg-[#e0e6e6] transition-colors duration-200'>
              <p className='text-2xl font-bold text-[#0a1622]'>{item.label}</p>
              <p className='text-base text-gray-600'>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capital;
