// import Image from "next/image";
// import investor from "@/public/images/img-capital-hero.svg";
// import bgInvestor from "@/public/images/accent-green-bt-ct.svg";
// import angel from "@/public/images/img-logo-angellist.svg";
import invesment1 from "@/public/images/investmentOne.svg";
import invesment2 from "@/public/images/investmentOneBottom.svg";
import invesment3 from "@/public/images/investmentTwo.svg";
import invesment4 from "@/public/images/investmentsThree.svg";
import invesment5 from "@/public/images/investmentThreeBottom.svg";
import invesment6 from "@/public/images/img-logo-mevo.svg";

import Link from "next/link";
import InvesmentsCards from "./InvesmentsCards";

const SectionInvestment = () => {
  return (
    <section className='pt-8 pb-12 bg-[#0a1622] overflow-hidden lg:pt-20'>
      <div className='container mx-auto text-center px-6'>
        {/* Header Section */}
        <div className='text-center max-w-2xl mx-auto mb-12'>
          <h1 className='text-4xl md:text-5xl font-extrabold text-[#d1d7d7] mb-4'>
            Data-Driven Fund for High-Potential Startups
          </h1>
          <p className='text-lg text-[#87bab3] font-medium mb-8'>
            Invest in a diversified portfolio of MENA’s top-rated startups
          </p>
          <div className='flex justify-center gap-4'>
            <Link href='/' className='btn-primary'>
              Schedule a Call
            </Link>
            <Link href='/' className='btn-secondary'>
              Invest Now
            </Link>
          </div>
        </div>

        {/* Investment Highlights Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-12'>
          <InvesmentsCards
            img={invesment1}
            text='Investment Horizon:'
            strongText='9 Years'
            number='4300x'
            imgTwo={invesment2}
          />
          <InvesmentsCards
            img={invesment3}
            text='Startup Growth:'
            strongText='Top Tier'
            number='3200x'
            imgTwo={invesment2}
          />
          <InvesmentsCards
            img={invesment4}
            text='Global Reach:'
            strongText='MENA Focus'
            number='1500x'
            imgTwo={invesment5}
          />
          <InvesmentsCards
            img={invesment6}
            text='Market Value:'
            strongText='Expanding'
            number='2300x'
            imgTwo={invesment5}
          />
        </div>

        {/* CTA Section */}
        <div className='bg-[#4d7374] p-8 rounded-lg text-white text-center max-w-xl mx-auto mt-8'>
          <p className='text-2xl font-semibold'>
            The next unicorns are raising capital—join us!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionInvestment;
