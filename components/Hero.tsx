import Image from "next/image";
import startupImage from "@/public/images/startup.jpg";
import investorImage from "@/public/images/investor.jpg";
import { FaTableList } from "react-icons/fa6";
import { GrDatabase } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { IoSunny } from "react-icons/io5";
import { LuPackageOpen } from "react-icons/lu";
import { MdEmojiFlags } from "react-icons/md";


const Hero = () => {
  return (
    <section className='bg-[#001d21f3] text-white'>
      <div>
        <div className='flex flex-col justify-center xl:items-start mt-16 gap-4 lg:px-56  max-lg:px-14 pb-14'>
          <div className='flex flex-col gap-6 max-lg:text-center'>
            <h1 className='text-6xl mb-3'>
              Startup investing <br /> made easy.
            </h1>
            <p>
              ANGELSTA provides investors and innovators <br /> with the tools
              to grow.
            </p>
            <button className='bg-white text-[#001d21f3] w-[200px] rounded-md overflow-hidden font-medium mb-6 py-3 max-lg:mx-auto text-black hover:bg-[#989ec5] hover:scale-110 duration-300'>
              Get started for Free
            </button>
          </div>
          <div className='flex gap-8 w-full justify-between max-md:flex-col max-md:justify-center'>
            <div className='w-full'>
              <Image
                src={startupImage}
                width={600}
                height={200}
                alt='startup'
                className='rounded-md'
              />
              <div>
                <h4 className='text-2xl mt-1'>Startup Services</h4>
              </div>
              <div className='flex justify-between mt-4 max-md:flex-col gap-4'>
                <div className='flex flex-wrap gap-4 justify-start flex-col items-start'>
                  <div className='flex gap-2 justify-center items-center'>
                    <IoSunny size={17} />
                    <h5>Data Room</h5>
                  </div>
                  <div className='flex gap-2 justify-center items-center'>
                    <GrDatabase size={17} />
                    <h5>Investors Database</h5>
                  </div>
                  <div className='flex gap-2 justify-center items-center'>
                    <ImProfile size={17} />
                    <h5>Automated Vauation</h5>
                  </div>
                </div>
                <div className='flex flex-wrap gap-4 justify-start flex-col items-start'>
                  <div className='flex gap-2 justify-center items-center'>
                    <MdEmojiFlags size={17} />
                    <h5>Demo Days</h5>
                  </div>
                  <div className='flex gap-2 justify-center items-center'>
                    <FaTableList size={17} />
                    <h5>Cap Table</h5>
                  </div>
                  <div className='flex gap-2 justify-center items-center'>
                    <LuPackageOpen size={17} />
                    <h5>Investor Readlness Package</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full'>
              <Image
                src={investorImage}
                width={600}
                height={200}
                alt='investor'
                className='rounded-md'
              />
              <div>
                <h4 className='text-2xl mt-1'>Investors Services</h4>
              </div>
              <div className='flex max-md:flex-col justify-between mt-4 gap-4'>
                <div className='flex flex-wrap gap-4 justify-start flex-col items-start'>
                  <div className='flex gap-2 justify-center items-center'>
                    <IoSunny size={17} />
                    <h5>Personal Profiles</h5>
                  </div>
                  <div className='flex gap-2 justify-center items-center'>
                    <GrDatabase size={17} />
                    <h5>Portofolio Management</h5>
                  </div>
                  <div className='flex gap-2 justify-center items-center'>
                    <ImProfile size={17} />
                    <h5>Startup Sourcing & Recommendation</h5>
                  </div>
                </div>
                <div className='flex flex-wrap gap-4 justify-start flex-col items-start'>
                  <div className='flex gap-2 justify-center items-center'>
                    <MdEmojiFlags size={17} />
                    <h5>Startup Database</h5>
                  </div>
                  <div className='flex gap-2 justify-center items-center'>
                    <FaTableList size={17} />
                    <h5>Incabator/Accicrator Management</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName}
            subtext='Access and manage your account and transactions effciently.'
          />
        </div> */}
      </div>
    </section>
  );
}

export default Hero