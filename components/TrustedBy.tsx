import Image from "next/image";
import companyLogo1 from "@/public/images/company-logo1.png"; // Replace with actual logos
import companyLogo2 from "@/public/images/company-logo2.png";
import companyLogo3 from "@/public/images/company-logo3.png";
import companyLogo4 from "@/public/images/company-logo4.jpeg";
import companyLogo5 from "@/public/images/company-logo5.png";

const TrustedBy: React.FC = () => {
  return (
    <section className='bg-gray-50 py-16'>
      <div className='container mx-auto px-6 lg:px-12'>
        <h2 className='text-4xl font-extrabold text-center text-gray-900 mb-12'>
          Trusted By Leading Innovators
        </h2>
        <div className='flex flex-wrap justify-center items-center gap-12'>
          <div className='transition-transform transform hover:scale-110 duration-300'>
            <Image
              src={companyLogo1}
              alt='Company 1'
              width={160}
              height={80}
              className='object-contain'
            />
          </div>
          <div className='transition-transform transform hover:scale-110 duration-300'>
            <Image
              src={companyLogo2}
              alt='Company 2'
              width={160}
              height={80}
              className='object-contain'
            />
          </div>
          <div className='transition-transform transform hover:scale-110 duration-300'>
            <Image
              src={companyLogo3}
              alt='Company 3'
              width={160}
              height={80}
              className='object-contain'
            />
          </div>
          <div className='transition-transform transform hover:scale-110 duration-300'>
            <Image
              src={companyLogo4}
              alt='Company 4'
              width={160}
              height={80}
              className='object-contain'
            />
          </div>
          <div className='transition-transform transform hover:scale-110 duration-300'>
            <Image
              src={companyLogo5}
              alt='Company 5'
              width={160}
              height={80}
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
