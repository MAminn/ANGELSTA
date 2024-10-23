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
    <section className='bg-[#001d21f3] text-white py-16'>
      <div className='container mx-auto px-6 lg:px-12'>
        <div className='text-center mb-12'>
          <h1 className='text-5xl font-bold mb-4'>
            Startup Investing Simplified
          </h1>
          <p className='text-lg mb-6'>
            ANGELSTA connects investors and innovators with the tools to grow.
          </p>
          <button className='bg-white font-bold text-[#000] py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform'>
            Get started for Free
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Startup Services */}
          <div className='bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300'>
            <Image
              src={startupImage}
              width={600}
              height={300}
              alt='Startups'
              className='rounded-md mb-4'
            />
            <h2 className='text-2xl font-bold mb-4'>Startup Services</h2>
            <ul className='space-y-4'>
              <li className='flex items-center gap-2'>
                <IoSunny size={20} /> Data Room
              </li>
              <li className='flex items-center gap-2'>
                <GrDatabase size={20} /> Investors Database
              </li>
              <li className='flex items-center gap-2'>
                <ImProfile size={20} /> Automated Valuation
              </li>
              <li className='flex items-center gap-2'>
                <MdEmojiFlags size={20} /> Demo Days
              </li>
              <li className='flex items-center gap-2'>
                <FaTableList size={20} /> Cap Table
              </li>
              <li className='flex items-center gap-2'>
                <LuPackageOpen size={20} /> Investor Readiness Package
              </li>
            </ul>
          </div>

          {/* Investor Services */}
          <div className='bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300'>
            <Image
              src={investorImage}
              width={600}
              height={300}
              alt='Investors'
              className='rounded-md mb-4'
            />
            <h2 className='text-2xl font-bold mb-4'>Investor Services</h2>
            <ul className='space-y-4'>
              <li className='flex items-center gap-2'>
                <IoSunny size={20} /> Personal Profiles
              </li>
              <li className='flex items-center gap-2'>
                <GrDatabase size={20} /> Portfolio Management
              </li>
              <li className='flex items-center gap-2'>
                <ImProfile size={20} /> Startup Sourcing & Recommendation
              </li>
              <li className='flex items-center gap-2'>
                <MdEmojiFlags size={20} /> Startup Database
              </li>
              <li className='flex items-center gap-2'>
                <FaTableList size={20} /> Incubator/Accelerator Management
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
