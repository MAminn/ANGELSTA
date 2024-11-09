'use client'
import { motion } from "framer-motion";
import Link from "next/link";

const SectionInvestment = () => {
  return (
    <section className='pt-12 pb-16 bg-[#0a1622] overflow-hidden lg:pt-32'>
      <div className='container mx-auto text-center px-6'>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='text-center  mx-auto mb-12'>
          <h1 className='text-4xl md:text-5xl font-extrabold text-[#d1d7d7] mb-4'>
            Unlock High-Quality Investments with AI-Driven Recommendations
          </h1>
          <p className='text-lg text-[#87bab3] font-medium mb-8'>
            Angelsta gives investors access to curated startup opportunities
            backed by AI-driven valuations and real-time market intelligence.
            Whether you&apos;re investing in early-stage startups or looking to
            expand your portfolio, Angelsta provides the tools to help you make
            data-driven decisions with confidence
          </p>
          <Link href='/' className='btn-primary'>
            Start Building Your Portfolio
          </Link>
        </motion.div>

        {/* Content Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
          {/* Individual Features */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className='bg-[#4d7374] p-8 rounded-lg text-white'>
            <h3 className='text-xl font-semibold mb-3'>
              AI-Powered Recommendations
            </h3>
            <p className='text-[#d1d7d7]'>
              Leverage AI to discover startups with the highest growth potential
              in the MENA region.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            className='bg-[#4d7374] p-8 rounded-lg text-white'>
            <h3 className='text-xl font-semibold mb-3'>Data-Driven Insights</h3>
            <p className='text-[#d1d7d7]'>
              Make informed investment decisions with access to detailed
              financial analysis and market trends.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            className='bg-[#4d7374] p-8 rounded-lg text-white'>
            <h3 className='text-xl font-semibold mb-3'>Real-Time Updates</h3>
            <p className='text-[#d1d7d7]'>
              Track your portfolio and receive instant alerts on important
              investment milestones.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionInvestment;
