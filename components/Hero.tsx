import Image from "next/image";
import startupImage from "@/public/images/startup.jpg";
import investorImage from "@/public/images/investor.jpg";
import { IoSunny } from "react-icons/io5";
import { GrDatabase } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { MdEmojiFlags } from "react-icons/md";
import { FaTableList } from "react-icons/fa6";
import { LuPackageOpen } from "react-icons/lu";

const Hero: React.FC = () => {
  return (
    <section className='bg-gradient-to-br from-[#0a1622] to-[#0a272b] text-[#d1d7d7] py-20'>
      <div className='container mx-auto px-6 lg:px-12'>
        {/* Heading Section */}
        <div className='text-center mb-12'>
          <h1 className='text-6xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#87bab3] to-[#4d7374] animate-gradient'>
            Startup Investing Simplified
          </h1>
          <p className='text-xl mb-8 text-[#d1d7d7]'>
            ANGELSTA connects investors and innovators with the tools to grow.
          </p>
          <button className='bg-gradient-to-r from-[#87bab3] to-[#4d7374] text-[#0a1622] font-semibold py-3 px-10 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300 hover:shadow-2xl'>
            Get Started for Free
          </button>
        </div>

        {/* Services Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Startup Services */}
          <div className='bg-[#0a272b]/70 backdrop-blur-md p-8 rounded-lg shadow-xl hover:bg-[#0a272b]/80 transition-colors duration-300 hover:shadow-2xl transform hover:-translate-y-2'>
            <Image
              src={startupImage}
              width={600}
              height={300}
              alt='Startups'
              className='rounded-lg mb-6 object-cover'
            />
            <h2 className='text-3xl font-semibold mb-4 text-[#87bab3]'>
              Startup Services
            </h2>
            <ul className='space-y-5 text-lg'>
              <li className='flex items-center gap-3 text-[#d1d7d7] hover:text-[#87bab3] transition-colors'>
                <IoSunny size={24} /> Data Room
              </li>
              <li className='flex items-center gap-3 text-[#d1d7d7] hover:text-[#87bab3] transition-colors'>
                <GrDatabase size={24} /> Investors Database
              </li>
              <li className='flex items-center gap-3 text-[#d1d7d7] hover:text-[#87bab3] transition-colors'>
                <ImProfile size={24} /> Automated Valuation
              </li>
              <li className='flex items-center gap-3 text-[#d1d7d7] hover:text-[#87bab3] transition-colors'>
                <MdEmojiFlags size={24} /> Demo Days
              </li>
              <li className='flex items-center gap-3 text-[#d1d7d7] hover:text-[#87bab3] transition-colors'>
                <FaTableList size={24} /> Cap Table
              </li>
              <li className='flex items-center gap-3 text-[#d1d7d7] hover:text-[#87bab3] transition-colors'>
                <LuPackageOpen size={24} /> Investor Readiness Package
              </li>
            </ul>
          </div>

          {/* Investor Services */}
          <div className='bg-[#0a272b]/70 backdrop-blur-md p-8 rounded-lg shadow-xl hover:bg-[#0a272b]/80 transition-colors duration-300 hover:shadow-2xl transform hover:-translate-y-2'>
            <Image
              src={investorImage}
              width={600}
              height={300}
              alt='Investors'
              className='rounded-lg mb-6 object-cover'
            />
            <h2 className='text-3xl font-semibold mb-4 text-[#87bab3]'>
              Investor Services
            </h2>
            <ul className='space-y-5 text-lg'>
              <li className='flex items-center gap-3 text-[#d1d7d7] hover:text-[#4d7374] transition-colors'>
                <IoSunny size={24} /> Personal Profiles
              </li>
              <li className='flex items-center gap-3 text-[#d1d7d7] hover:text-[#4d7374] transition-colors'>
                <GrDatabase size={24} /> Portfolio Management
              </li>
              <li className='flex items-center gap-3 text-[#d1d7d7] hover:text-[#4d7374] transition-colors'>
                <ImProfile size={24} /> Startup Sourcing & Recommendation
              </li>
              <li className='flex items-center gap-3 text-[#d1d7d7] hover:text-[#4d7374] transition-colors'>
                <MdEmojiFlags size={24} /> Startup Database
              </li>
              <li className='flex items-center gap-3 text-[#d1d7d7] hover:text-[#4d7374] transition-colors'>
                <FaTableList size={24} /> Incubator/Accelerator Management
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
