import React from "react";
import Link from "next/link";

const BlockchainMarketplace: React.FC = () => {
  return (
    <div className='bg-[#0a1622] text-[#d1d7d7] min-h-screen py-12'>
      <div className='container mx-auto px-6 lg:px-12 space-y-10 pt-6 max-md:text-center'>
        {/* Headline */}
        <header className='text-center'>
          <h1 className='text-4xl lg:text-5xl font-bold text-[#87bab3] mb-4'>
            Secure, Transparent, Blockchain-Powered Marketplace
          </h1>
        </header>

        {/* Content Section */}
        <section className='bg-[#0a272b] p-8 rounded-lg shadow-lg text-center lg:text-left'>
          <p className='text-lg lg:text-xl mb-6'>
            Angelsta&apos;s marketplace is powered by blockchain technology, ensuring
            transparency and security in every transaction. Buy and sell shares,
            participate in syndicate funds, and invest with confidence in MENA&apos;s
            fast-growing startups.
          </p>
          <ul className='space-y-3 list-disc list-inside text-lg'>
            <li>
              Blockchain Security: Tamper-proof transactions for peace of mind.
            </li>
            <li>
              Cross-border Accessibility: Invest across the MENA region
              securely.
            </li>
            <li>
              Market Integrity: Blockchain ensures transparency and trust in the
              marketplace.
            </li>
          </ul>
          <Link
            href='/services/blockchain-marketplace'
            className='mt-8 inline-block bg-gradient-to-r from-[#87bab3] to-[#4d7374] text-[#0a1622] font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform'>
            Join the Blockchain Marketplace
          </Link>
        </section>
      </div>
    </div>
  );
};

export default BlockchainMarketplace;
