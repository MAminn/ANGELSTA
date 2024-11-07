'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import blockchainGraphic from "@/public/images/blockchain-graphic.png";

const BlockchainMarketplacePage = () => {
  return (
    <div className='bg-[#0a1622] text-[#d1d7d7] font-sans'>
      {/* Hero Section */}
      <section className='py-20 text-center'>
        <h1 className='text-4xl font-bold text-[#87bab3]'>
          Secure, Transparent, Blockchain-Powered Marketplace
        </h1>
        <p className='mt-4 text-lg'>
          Invest with Confidence in MENA’s Blockchain-Driven Marketplace.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className='mt-8 px-8 py-3 border border-[#87bab3] text-[#d1d7d7] hover:bg-[#0a272b] hover:text-white transition duration-200'>
          Join the Blockchain Marketplace
        </motion.button>
      </section>

      {/* Section 1: Blockchain Security */}
      <section className='py-16 bg-[#0a272b] px-8 md:px-20 lg:px-32'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl font-bold text-[#87bab3]'>
            Blockchain Security
          </h2>
          <p className='mt-6 text-lg text-[#d1d7d7]'>
            Angelsta’s marketplace leverages blockchain technology to provide
            unparalleled security and transparency in every transaction.
          </p>
          <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='p-6 border border-[#4d7374] bg-[#0a272b] rounded-lg shadow-md transition duration-200 hover:bg-[#0a3a3f]'>
              <h3 className='text-xl font-semibold text-[#87bab3]'>
                Tamper-Proof Security
              </h3>
              <p className='mt-2 text-[#d1d7d7]'>
                Enjoy peace of mind with blockchain-verified transactions.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className='p-6 border border-[#4d7374] bg-[#0a272b] rounded-lg shadow-md transition duration-200 hover:bg-[#0a3a3f]'>
              <h3 className='text-xl font-semibold text-[#87bab3]'>
                Cross-Border Accessibility
              </h3>
              <p className='mt-2 text-[#d1d7d7]'>
                Securely invest across the MENA region with confidence.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className='p-6 border border-[#4d7374] bg-[#0a272b] rounded-lg shadow-md transition duration-200 hover:bg-[#0a3a3f]'>
              <h3 className='text-xl font-semibold text-[#87bab3]'>
                Transparency & Trust
              </h3>
              <p className='mt-2 text-[#d1d7d7]'>
                Blockchain technology ensures a transparent marketplace.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Cross-border Accessibility */}
      <section className='py-12 px-8 md:px-20 lg:px-32 text-center'>
        <div className='max-w-3xl mx-auto border-t border-[#4d7374] pt-10'>
          <h2 className='text-2xl font-semibold text-[#4d7374]'>
            Cross-border Accessibility
          </h2>
          <p className='mt-4'>
            Invest in startups across the MENA region with blockchain-driven
            security and peace of mind.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className='mt-8 px-8 py-3 border border-[#87bab3] text-[#d1d7d7] hover:bg-[#0a272b] hover:text-white transition duration-200'>
            Explore Accessibility Features
          </motion.button>
        </div>
      </section>

      {/* Section 3: Market Integrity */}
      <section className='py-12 bg-[#0a1622] px-8 md:px-20 lg:px-32'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-2xl font-semibold text-[#87bab3] mb-6'>
            Market Integrity You Can Rely On
          </h2>
          <div className='flex justify-center mb-6'>
            <Image
              src={blockchainGraphic}
              alt='Blockchain Security Graphic'
              width={400}
              height={300}
            />
          </div>
          <p className='text-[#d1d7d7]'>
            Angelsta’s blockchain technology ensures integrity in every
            transaction, giving investors confidence and transparency in the
            marketplace.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlockchainMarketplacePage;
