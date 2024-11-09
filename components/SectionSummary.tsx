'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import icon1 from "@/public/images/icon-analytics.png";
import icon2 from "@/public/images/icon-ratings.png";
import icon3 from "@/public/images/icon-research.png";

const SectionSummary = () => {
  return (
    <section className='relative px-8 py-12 bg-[#0a1622] text-[#d1d6d6]'>
      {/* Decorative SVG divider */}
      <div className='absolute inset-x-0 w-8 mx-auto -top-4'>
        <svg
          className='mx-auto'
          width='24'
          height='30'
          viewBox='0 0 24 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M23.185 15.025L12.135 21.4L1 15.025'
            stroke='#87bab3'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
          <path
            d='M1 15.025L12.05 8.65002L23.185 15.025'
            stroke='#4d7374'
            strokeWidth='1.5'
            strokeLinecap='round'
            opacity='0.3'
          />
          <path
            d='M12.1351 21.4L12.05 1'
            stroke='#87bab3'
            strokeWidth='1.5'
            strokeLinecap='round'
          />
        </svg>
      </div>

      {/* Main section content */}
      <div className='max-w-5xl mx-auto py-8'>
        {/* Text introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center space-y-4 mb-8'>
          <p className='font-bold text-[#87bab3] uppercase'>Our Approach</p>
          <h2 className='text-3xl font-semibold text-[#d1d7d7] lg:text-4xl'>
            Secure Your Investments with Blockchain Transparency
          </h2>
          <p className='text-lg text-[#87bab3] lg:text-xl'>
            Angelsta’s blockchain-powered marketplace ensures that every
            transaction is secure, tamper-proof, and fully transparent. This is
            especially crucial for cross-border transactions in the MENA region,
            where blockchain technology enhances trust and reliability.
          </p>
        </motion.div>

        {/* Icon Highlights */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3 text-center'>
          {/* Immutable Transactions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='space-y-2'>
            <Image
              src={icon1}
              width={64}
              height={64}
              alt='Immutable Transactions Icon'
              className='mx-auto'
            />
            <h4 className='text-xl font-bold text-[#d1d6d6]'>
              Immutable Transactions
            </h4>
            <p className='text-sm text-[#87bab3]'>
              Every investment is recorded on the blockchain, ensuring complete
              transparency.
            </p>
          </motion.div>

          {/* Reduced Risk */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='space-y-2'>
            <Image
              src={icon2}
              width={64}
              height={64}
              alt='Reduced Risk Icon'
              className='mx-auto'
            />
            <h4 className='text-xl font-bold text-[#d1d6d6]'>Reduced Risk</h4>
            <p className='text-sm text-[#87bab3]'>
              Blockchain mitigates fraud risk, ensuring that your investment is
              secure.
            </p>
          </motion.div>

          {/* Cross-Border Access */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='space-y-2'>
            <Image
              src={icon3}
              width={54}
              height={54}
              alt='Cross-Border Access Icon'
              className='mx-auto'
            />
            <h4 className='text-xl font-bold text-[#d1d6d6]'>
              Cross-Border Access
            </h4>
            <p className='text-sm text-[#87bab3]'>
              Seamlessly invest across MENA with confidence in secure, verified
              transactions.
            </p>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='mt-14 text-center'>
          <Link href='/' className='btn-primary'>
            Explore Secure Investment Opportunities
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionSummary;

