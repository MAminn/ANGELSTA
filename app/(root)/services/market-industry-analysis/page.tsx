import React from "react";
import Link from "next/link";

const MarketAnalysis: React.FC = () => {
  return (
    <div className='bg-[#0a1622] text-[#d1d7d7] min-h-screen py-12'>
      <div className='container mx-auto px-6 lg:px-12 space-y-10 pt-6 max-md:text-center'>
        {/* Headline */}
        <header className='text-center'>
          <h1 className='text-4xl lg:text-5xl font-bold text-[#87bab3] mb-4'>
            AI-Driven Market Intelligence Tailored for MENA Startups
          </h1>
          <p className='text-xl lg:text-2xl font-light text-[#d1d7d7] mb-8'>
            Angelsta provides in-depth AI-powered market analysis to help
            startups and investors stay ahead in the MENA region. Whether
            you&apos;re looking to scale your business or evaluate investment
            opportunities, our platform offers data-backed insights for better
            decision-making.
          </p>
        </header>

        {/* Key Features Section */}
        <section className='bg-[#0a272b] p-8 rounded-lg shadow-lg'>
          <ul className='space-y-4 text-lg list-disc list-inside'>
            <li>
              <span className='font-semibold text-[#4d7374]'>
                Real-Time Reports:
              </span>{" "}
              Get AI-driven market intelligence tailored to your business.
            </li>
            <li>
              <span className='font-semibold text-[#4d7374]'>
                Sector-Specific Insights:
              </span>{" "}
              Understand the trends in fintech, e-commerce, energy, and more in
              the MENA market.
            </li>
            <li>
              <span className='font-semibold text-[#4d7374]'>
                Competitive Advantage:
              </span>{" "}
              Use AI to stay ahead of the competition.
            </li>
          </ul>
          <Link
            href='/services/explore-market-insights'
            className='mt-6 inline-block bg-gradient-to-r from-[#87bab3] to-[#4d7374] text-[#0a1622] font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform'>
            Explore Market Insights
          </Link>
        </section>

        {/* Final CTA Section */}
        <section className='text-center mt-12'>
          <h2 className='text-3xl font-semibold text-[#87bab3] mb-4'>
            Start Building Your Startup Portfolio or Get Funded Today
          </h2>
          <Link
            href='/signup'
            className='inline-block bg-gradient-to-r from-[#87bab3] to-[#4d7374] text-[#0a1622] font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform'>
            Sign Up Free
          </Link>
        </section>
      </div>
    </div>
  );
};

export default MarketAnalysis;
