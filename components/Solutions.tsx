// import analysis from "@/public/images/analysis.jpg";
import aiImage from "@/public/images/3d-motion-flow-background-with-digital-particles.jpg"; // New image for AI Valuation
import blockchainImage from "@/public/images/cyber-security-concept-digital-art.jpg"; // New image for Blockchain Marketplace
import Image from "next/image";
import Link from "next/link";

const Solutions = () => {
  return (
    <section className='bg-[#001d21f3] text-white w-full py-20 px-4'>
      <div className='max-w-[1240px] mx-auto text-center mb-16'>
        <p className='text-sm font-semibold uppercase text-[#87bab3]'>
          Solutions
        </p>
        <h2 className='text-5xl font-bold leading-snug mb-6'>
          Unlock New Insights with Our Cutting-Edge Solutions
        </h2>
        <p className='text-lg max-w-2xl mx-auto'>
          Discover powerful tools that empower smarter, data-driven decisions
          with AI-powered insights and blockchain-secured transactions.
        </p>
      </div>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-12'>
        {/* Solution Card 1 */}
        <div className='bg-[#0a272b] rounded-3xl p-8 text-center shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl'>
          <Image
            src={aiImage}
            width={500}
            height={300}
            alt='AI Valuation'
            className='rounded-lg mb-6 mx-auto'
          />

          <h3 className='text-3xl font-semibold text-[#87bab3] mb-4'>
            AI Valuation
          </h3>
          <p className='text-lg mb-4'>
            Get instant, accurate valuations with our AI-powered tools designed
            for the MENA region&apos;s unique market dynamics.
          </p>
          <Link
            href='/solutions/ai-valuation'
            className='inline-block font-semibold bg-white text-[#001d21] rounded-full py-2 px-6 hover:bg-[#4d7374] hover:text-white transition ease-in-out duration-300'>
            Learn More
          </Link>
        </div>

        {/* Solution Card 2 */}
        <div className='bg-[#0a272b] rounded-3xl text-center p-8 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl'>
          <Image
            src={blockchainImage}
            width={500}
            height={300}
            alt='AI Valuation'
            className='rounded-lg mb-6 mx-auto'
          />

          <h3 className='text-3xl font-semibold text-[#87bab3] mb-4'>
            Blockchain Marketplace
          </h3>
          <p className='text-lg mb-4'>
            Invest confidently with a secure blockchain marketplace designed to
            provide transparency and protect your investments.
          </p>
          <Link
            href='/solutions/blockchain-marketplace'
            className='inline-block font-semibold bg-white text-[#001d21] rounded-full py-2 px-6 hover:bg-[#4d7374] hover:text-white transition ease-in-out duration-300'>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
