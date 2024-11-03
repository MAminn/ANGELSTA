import React from "react";
import Link from "next/link";

const StartupValuation: React.FC = () => {
  return (
    <div className='bg-[#0a1622] text-[#d1d7d7] min-h-screen py-12'>
      <div className='container mx-auto px-6 lg:px-12 space-y-10 pt-6 max-md:text-center'>
        {/* Headline */}
        <header className='text-center'>
          <h1 className='text-4xl lg:text-5xl font-bold text-[#87bab3] mb-4'>
            Smart Startup Valuation with AI Precision
          </h1>
        </header>

        {/* Content Section */}
        <section className='bg-[#0a272b] p-8 rounded-lg shadow-lg text-center lg:text-left'>
          <p className='text-lg lg:text-xl mb-6'>
            Angelsta uses cutting-edge AI to assess your startup’s value
            instantly. Our system evaluates financial health, market potential,
            and industry trends in the MENA region, giving you data-driven
            insights into your business.
          </p>
          <ul className='space-y-3 list-disc list-inside text-lg'>
            <li>
              Real-Time Valuations: Get an accurate valuation for your startup
              in minutes.
            </li>
            <li>
              Tailored for MENA: Our AI models are designed to capture regional
              market dynamics.
            </li>
            <li>
              Investor Ready: Understand your business’s readiness for
              investment.
            </li>
          </ul>
          <Link
            href='/services/free-ai-valuation'
            className='mt-8 inline-block bg-gradient-to-r from-[#87bab3] to-[#4d7374] text-[#0a1622] font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform'>
            Get Your Free AI Valuation
          </Link>
        </section>
      </div>
    </div>
  );
};

export default StartupValuation;
