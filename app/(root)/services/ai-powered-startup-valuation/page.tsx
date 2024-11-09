"use client";
import React from "react";
import { motion } from "framer-motion";

const AIPoweredValuation = () => {
  return (
    <section
      className='px-8 py-32 h-screen bg-[#0a1622] text-gray-100'>
      <div className='max-w-5xl mx-auto space-y-10'>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center'>
          <h1 className='text-4xl font-extrabold text-[#87bab3]'>
            Smart Startup Valuation with AI Precision
          </h1>
          <p className='mt-3 text-lg text-[#d1d7d7]'>
            Angelsta uses cutting-edge AI to assess your startup’s value
            instantly. Our system evaluates financial health, market potential,
            and industry trends in the MENA region, giving you data-driven
            insights into your business.
          </p>
        </motion.div>

        {/* Service Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3'>
          {/* Highlight 1 */}
          <motion.div
            className='bg-[#4d7374] p-6 rounded-lg shadow-lg'
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}>
            <h3 className='text-2xl font-bold text-[#d1d7d7]'>
              Real-Time Valuations
            </h3>
            <p className='mt-3 text-[#d1d7d7]'>
              Get an accurate valuation for your startup in minutes.
            </p>
          </motion.div>

          {/* Highlight 2 */}
          <motion.div
            className='bg-[#4d7374] p-6 rounded-lg shadow-lg'
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}>
            <h3 className='text-2xl font-bold text-[#d1d7d7]'>
              Tailored for MENA
            </h3>
            <p className='mt-3 text-[#d1d7d7]'>
              Our AI models are designed to capture regional market dynamics.
            </p>
          </motion.div>

          {/* Highlight 3 */}
          <motion.div
            className='bg-[#4d7374] p-6 rounded-lg shadow-lg'
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}>
            <h3 className='text-2xl font-bold text-[#d1d7d7]'>
              Investor Ready
            </h3>
            <p className='mt-3 text-[#d1d7d7]'>
              Understand your business’s readiness for investment.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='text-center mt-12'>
          <a
            href='/contact'
            className='inline-block px-8 py-3 text-lg font-semibold text-[#0a1622] bg-[#87bab3] rounded-md shadow-lg hover:bg-[#4d7374] hover:text-[#d1d7d7] transition-colors duration-300'>
            Get Your Free AI Valuation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AIPoweredValuation;
