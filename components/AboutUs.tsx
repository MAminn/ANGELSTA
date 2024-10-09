import aboutus from "@/public/images/aboutus.jpg";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className='bg-white text-[#000] w-full py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 max-md:gap-6'>
        <div className='mx-auto my-4'>
          <Image src={aboutus} width={500} height={500} alt='about-us' />
        </div>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col py-4 gap-4 max-md:text-center'>
            <p className='leading-4 text-[0.875rem] font-bold uppercase'>
              About us
            </p>
            <h1 className='text-4xl font-bold max-lg:text-[34px] leading-[42px]'>
              Helping the world’s leading companies defy doubt
            </h1>
            <p>
              Thousands of organizations use AlphaSense to make smarter
              decisions with confidence and speed.
            </p>
            <Link href='/aboutUs'>
              <button className='font-bold bg-[#0a1622] text-white rounded-full py-3 px-5 transform hover:scale-110 hover:text-white transition ease-out duration-300 mt-4'>
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
